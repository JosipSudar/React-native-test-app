import {Center, NativeBaseProvider} from 'native-base';
import {Form} from '../components/Form/Form';
export default FromScreen = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Form/>
      </Center>
    </NativeBaseProvider>
  );
};
