import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import AdminLogin from './screens/AdminLogin';
import TeacherLogin from './screens/TeacherLogin';
import StudentLogin from './screens/StudentLogin';
import AdminDashboard from './screens/AdminDashboard';
import TeacherDashboard from './screens/TeacherDashboard';
import StudentDashboard from './screens/StudentDashboard';
import ManageTeachers from './screens/ManageTeachers';
import ManageStudents from './screens/ManageStudents';
import ManageFees from './screens/ManageFees';
import ViewReports from './screens/ViewReports';
import UploadTimetable from './screens/UploadTimetable';
import UploadSyllabus from './screens/UploadSyllabus';
import ManageMarks from './screens/ManageMarks';
import ViewMarks from './screens/ViewMarks';
import ViewTimetable from './screens/ViewTimetable';
import ViewFeeStatus from './screens/ViewFeeStatus';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
        <Stack.Screen name="StudentLogin" component={StudentLogin} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        <Stack.Screen name="TeacherDashboard" component={TeacherDashboard} />
        <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
        <Stack.Screen name="ManageTeachers" component={ManageTeachers} />
        <Stack.Screen name="ManageStudents" component={ManageStudents} />
        <Stack.Screen name="ManageFees" component={ManageFees} />
        <Stack.Screen name="ViewReports" component={ViewReports} />
        <Stack.Screen name="UploadTimetable" component={UploadTimetable} />
        <Stack.Screen name="UploadSyllabus" component={UploadSyllabus} />
        <Stack.Screen name="ManageMarks" component={ManageMarks} />
        <Stack.Screen name="ViewMarks" component={ViewMarks} />
        <Stack.Screen name="ViewTimetable" component={ViewTimetable} />
        <Stack.Screen name="ViewFeeStatus" component={ViewFeeStatus} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
