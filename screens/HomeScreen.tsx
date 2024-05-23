import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importando ícone de saída
import { HomeScreenProps } from '../navigation/types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  // Navegar para a tela de criar consulta
  const handleCreateAppointment = () => {
    navigation.navigate('ScheduleAppointment');
  };

  // Navegar para a tela de consultas marcadas
  const handleViewAppointments = () => {
    navigation.navigate('ViewAppointmentsScreen');
  };

  // Função para sair
  const handleLogout = () => {
    // Coloque aqui a lógica para sair da sessão
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity onPress={handleCreateAppointment} style={styles.card}>
          <Text style={styles.cardText}>Criar Consulta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleViewAppointments} style={styles.card}>
          <Text style={styles.cardText}>Consultas Marcadas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50, // Espaço extra no topo
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  logoutButton: {
    padding: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20, // Espaço entre o cabeçalho e os cards
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
  },
});

export default HomeScreen;
