import { addDoc, collection, getDocs, DocumentData, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { firestore } from '../utils/firebaseConfig';

interface Appointment {
  doctor: string;
  date: string;
  time: string;
  comments: string;
  id?: string;
}

export const scheduleAppointment = async (doctor: string, date: string, time: string, comments: string): Promise<void> => {
  try {
    const appointmentsRef = collection(firestore, 'appointments');
    await addDoc(appointmentsRef, {
      doctor,
      date,
      time,
      comments,
    });
    console.log('Consulta agendada com sucesso:', { doctor, date, time, comments });
  } catch (error) {
    console.error('Erro ao agendar consulta:', error);
    throw new Error('Erro ao agendar consulta. Por favor, tente novamente.');
  }
};

export const getAppointments = async (): Promise<DocumentData[]> => {
  try {
    const appointmentsRef = collection(firestore, 'appointments');
    const querySnapshot = await getDocs(appointmentsRef);
    const appointmentsData: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      appointmentsData.push({ id: doc.id, ...doc.data() });
    });
    return appointmentsData;
  } catch (error) {
    console.error('Erro ao buscar consultas marcadas:', error);
    throw new Error('Erro ao buscar consultas marcadas. Por favor, tente novamente.');
  }
};

export const updateAppointment = async (id: string, updatedData: Partial<Appointment>): Promise<void> => {
  try {
    const appointmentDoc = doc(firestore, 'appointments', id);
    await updateDoc(appointmentDoc, updatedData);
  } catch (error) {
    console.error('Erro ao atualizar consulta:', error);
    throw new Error('Erro ao atualizar consulta. Por favor, tente novamente.');
  }
};

export const deleteAppointment = async (id: string): Promise<void> => {
  try {
    const appointmentDoc = doc(firestore, 'appointments', id);
    await deleteDoc(appointmentDoc);
  } catch (error) {
    console.error('Erro ao excluir consulta:', error);
    throw new Error('Erro ao excluir consulta. Por favor, tente novamente.');
  }
};
