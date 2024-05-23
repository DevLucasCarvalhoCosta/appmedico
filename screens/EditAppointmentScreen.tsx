import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { updateAppointment } from '../utils/appointments';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

type EditAppointmentScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EditAppointment'>;
type EditAppointmentScreenRouteProp = RouteProp<RootStackParamList, 'EditAppointment'>;

interface Props {
  navigation: EditAppointmentScreenNavigationProp;
  route: EditAppointmentScreenRouteProp;
}

const EditAppointmentScreen: React.FC<Props> = ({ route, navigation }) => {
  const { appointment } = route.params;
  const [doctor, setDoctor] = useState(appointment.doctor);
  const [date, setDate] = useState(appointment.date);
  const [time, setTime] = useState(appointment.time);
  const [comments, setComments] = useState(appointment.comments);

  const handleUpdateAppointment = async () => {
    try {
      await updateAppointment(appointment.id, { doctor, date, time, comments });
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar a consulta.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Editar Consulta</Text>
      <TextInput
        style={styles.input}
        placeholder="Médico"
        value={doctor}
        onChangeText={setDoctor}
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Horário"
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Comentários"
        value={comments}
        onChangeText={setComments}
      />
      <Button title="Atualizar Consulta" onPress={handleUpdateAppointment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default EditAppointmentScreen;
