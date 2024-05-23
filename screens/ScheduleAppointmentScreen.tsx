// ScheduleAppointmentScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { scheduleAppointment } from '../utils/appointments'; // Vamos criar esta função posteriormente

const ScheduleAppointmentScreen = () => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comments, setComments] = useState('');

  const handleScheduleAppointment = () => {
    // Aqui vamos implementar a lógica para agendar a consulta
    // Usaremos a função scheduleAppointment que criaremos posteriormente
    scheduleAppointment(doctor, date, time, comments);
  };

  return (
    <View style={styles.container}>
      <Text>Agendar Consulta</Text>
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
      <Button title="Agendar Consulta" onPress={handleScheduleAppointment} />
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

export default ScheduleAppointmentScreen;
