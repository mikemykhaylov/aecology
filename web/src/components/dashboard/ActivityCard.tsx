/* eslint-disable default-case */
import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  useDisclosure,
} from '@chakra-ui/react';
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  increment,
  Timestamp,
  updateDoc,
} from 'firebase/firestore';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { auth, firestore } from '../../constants/firebase';
import { DARKER_PRIMARY, DARK_GRAY, LIGHT_GRAY, PRIMARY } from '../../constants/websiteColors';
import { Heading2, Heading3, Heading4 } from '../general/Headings';
import Laundry from '../icons/Laundry';
import NatureHelp from '../icons/NatureHelp';
import PowerOff from '../icons/PowerOff';
import Recycle from '../icons/Recycle';
import Shower from '../icons/Shower';
import { CardContainer, CardHeading } from './Card';

const ActivitiesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Activity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  & > *:not(:last-child) {
    margin-right: 24px;
  }
`;

const ActivityCard = ({ heading }: { heading: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activity, setActivity] = useState({
    name: '',
    category: 'co2',
    amount: 75,
    date: new Date(),
    additionalInfo: '',
    userId: auth.currentUser!.uid,
  });

  const createActivityHandler = async () => {
    let impact: number;
    if (activity.category === 'co2') {
      impact = (activity.amount / 5) * 1.7;
    } else if (activity.category === 'electricity') {
      impact = activity.amount * 10;
    } else {
      impact = (activity.amount / 100) * 65;
    }
    impact = Math.round(impact);
    const activityRef = await addDoc(collection(firestore, 'activities'), {
      name: activity.name,
      category: activity.category,
      impact,
      date: Timestamp.fromDate(activity.date),
      userId: doc(firestore, 'users', auth!.currentUser!.uid),
    });
    const userRef = doc(firestore, 'users', auth!.currentUser!.uid);
    switch (activity.category) {
      case 'co2':
        await updateDoc(userRef, {
          activities: arrayUnion(activityRef),
          cardbonReduced: increment(impact),
        });
        break;
      case 'electricity':
        await updateDoc(userRef, {
          activities: arrayUnion(activityRef),
          electricitySaved: increment(impact),
        });
        break;
      case 'water':
        await updateDoc(userRef, {
          activities: arrayUnion(activityRef),
          waterSaved: increment(impact),
        });
        break;

      default:
        break;
    }
    onClose();
  };

  return (
    <>
      <CardContainer colSpan={2}>
        <CardHeading>
          <NatureHelp fill={PRIMARY} size={40} />
          <Heading3>{heading}</Heading3>
        </CardHeading>
        <ActivitiesContainer>
          <Grid width="100%" templateColumns="repeat(2, 1fr)" columnGap="16px" rowGap="16px">
            <Activity onClick={onOpen}>
              <Recycle fill={DARK_GRAY} size={40} />
              <Heading4>Recycled</Heading4>
            </Activity>
            <Activity onClick={onOpen}>
              <Shower fill={DARK_GRAY} size={40} />
              <Heading4>Took a short shower</Heading4>
            </Activity>
            <Activity onClick={onOpen}>
              <Laundry fill={DARK_GRAY} size={40} />
              <Heading4>Did laundry myself</Heading4>
            </Activity>
            <Activity onClick={onOpen}>
              <PowerOff fill={DARK_GRAY} size={40} />
              <Heading4>Turned off lights</Heading4>
            </Activity>
          </Grid>
        </ActivitiesContainer>
      </CardContainer>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new activity</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} display="flex" flexDirection="column" alignItems="center">
            <FormControl>
              <FormLabel>What did you do?</FormLabel>
              <Input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setActivity({ ...activity, name: e.target.value })
                }
                value={activity.name}
                placeholder="Recyling..."
              />
            </FormControl>

            <FormControl as="fieldset" mt={4}>
              <FormLabel as="legend">How does that help nature?</FormLabel>
              <RadioGroup defaultValue="co2">
                <HStack spacing="24px">
                  <Radio
                    checked={activity.category === 'co2'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setActivity({
                        ...activity,
                        category: e.target.value,
                        additionalInfo: 'How many units of trash did you recycle?',
                      })
                    }
                    value="co2"
                  >
                    Reduces CO2 emissions
                  </Radio>
                  <Radio
                    checked={activity.category === 'electricity'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setActivity({
                        ...activity,
                        category: e.target.value,
                        additionalInfo: 'For how long did you turn it off?',
                      })
                    }
                    value="electricity"
                  >
                    Preserves electricity
                  </Radio>
                  <Radio
                    checked={activity.category === 'water'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setActivity({
                        ...activity,
                        category: e.target.value,
                        additionalInfo:
                          'How much water do you think you used compared to the usual (in %)?',
                      })
                    }
                    value="water"
                  >
                    Preserves water
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>{activity.additionalInfo}</FormLabel>
              <NumberInput defaultValue={75} min={10} max={90}>
                <NumberInputField
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setActivity({
                      ...activity,
                      amount: Math.round(parseInt(e.target.value || '0', 10)),
                    })
                  }
                  value={activity.amount}
                />
              </NumberInput>
            </FormControl>
            {activity.name !== '' && (
              <>
                <Heading4>Great! You have saved</Heading4>
                {activity.category === 'co2' && <Heading2>{(activity.amount / 5) * 1.7}</Heading2>}
                {activity.category === 'electricity' && <Heading2>{activity.amount * 10}</Heading2>}
                {activity.category === 'water' && (
                  <Heading2>{65 - (activity.amount / 100) * 65}</Heading2>
                )}
                {activity.category === 'co2' && <Heading4>kilo(s) of CO2</Heading4>}
                {activity.category === 'electricity' && <Heading4>W of electricity</Heading4>}
                {activity.category === 'water' && <Heading4>liter(s) of water</Heading4>}
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              bgColor={DARKER_PRIMARY}
              color={LIGHT_GRAY}
              mr={3}
              onClick={createActivityHandler}
            >
              Submit
            </Button>
            <Button bgColor={LIGHT_GRAY} color={DARK_GRAY} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

ActivityCard.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ActivityCard;
