import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import { getAppointments, deleteAppointment } from '../utils/appointments';
import { DocumentData } from 'firebase/firestore';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { RouteProp } from '@react-navigation/native';

type ViewAppointmentsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ViewAppointmentsScreen'>;
type ViewAppointmentsScreenRouteProp = RouteProp<RootStackParamList, 'ViewAppointmentsScreen'>;

interface Props {
  navigation: ViewAppointmentsScreenNavigationProp;
  route: ViewAppointmentsScreenRouteProp;
}

const ViewAppointmentsScreen: React.FC<Props> = ({ navigation }) => {
  const [appointments, setAppointments] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const fetchedAppointments = await getAppointments();
      setAppointments(fetchedAppointments);
    };

    fetchAppointments();
  }, []);

  const handleEdit = (appointment: DocumentData) => {
    navigation.navigate('EditAppointment', { appointment });
  };

  const handleDelete = async (appointmentId: string) => {
    try {
      await deleteAppointment(appointmentId);
      setAppointments(prevAppointments => prevAppointments.filter(app => app.id !== appointmentId));
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível excluir a consulta.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas Marcadas</Text>
      {appointments.length === 0 ? (
        <Text style={styles.noAppointments}>Nenhuma consulta marcada.</Text>
      ) : (
        <FlatList
          data={appointments}
          renderItem={({ item }) => (
            <View style={styles.appointment}>
              <Text style={styles.appointmentText}>{item.doctor}</Text>
              <Text style={styles.appointmentText}>{item.date}</Text>
              <Text style={styles.appointmentText}>{item.time}</Text>
              <Text style={styles.appointmentText}>{item.comments}</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => handleEdit(item)}>
                  <Icon name="edit" type="font-awesome" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Icon name="trash" type="font-awesome" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appointment: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  appointmentText: {
    fontSize: 16,
  },
  noAppointments: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
});

export default ViewAppointmentsScreen;
