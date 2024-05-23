import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  ScheduleAppointment: undefined;
  ViewAppointmentsScreen: undefined;
  EditAppointment: { appointment: any }; // Adicionando EditAppointment
};

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type ScheduleAppointmentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ScheduleAppointment'
>;

export type ViewAppointmentsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ViewAppointmentsScreen'
>;

export type EditAppointmentScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditAppointment'
>;

export type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
export type SignUpScreenRouteProp = RouteProp<RootStackParamList, 'SignUp'>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type ScheduleAppointmentScreenRouteProp = RouteProp<RootStackParamList, 'ScheduleAppointment'>;
export type ViewAppointmentsScreenRouteProp = RouteProp<RootStackParamList, 'ViewAppointmentsScreen'>;
export type EditAppointmentScreenRouteProp = RouteProp<RootStackParamList, 'EditAppointment'>;

export interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
}

export interface SignUpScreenProps {
  navigation: SignUpScreenNavigationProp;
  route: SignUpScreenRouteProp;
}

export interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

export interface ScheduleAppointmentScreenProps {
  navigation: ScheduleAppointmentScreenNavigationProp;
  route: ScheduleAppointmentScreenRouteProp;
}

export interface ViewAppointmentsScreenProps {
  navigation: ViewAppointmentsScreenNavigationProp;
  route: ViewAppointmentsScreenRouteProp;
}

export interface EditAppointmentScreenProps {
  navigation: EditAppointmentScreenNavigationProp;
  route: EditAppointmentScreenRouteProp;
}
