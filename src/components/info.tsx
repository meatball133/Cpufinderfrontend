import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';
import {Cpu_state} from "../App";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

async function Api(setText:any, text:any) {
  
    console.log("hi")
       try {
        const response = await fetch('http://127.0.0.1:8000/cpu/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"cpu_name": "12700k"}),
        });
        const json = await response.json();
        console.log(json);
        setText(json)
        console.log(text)
      } catch (error) {
        console.error(error);
      }
}

export default function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();
  const [text, setText] = useRecoilState(Cpu_state);
  return (
    <>
    <TextInput
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={() => Api(setText, text)}>
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={18} stroke={1.5} />
          ) : (
            <IconArrowLeft size={18} stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Input cpu"
      rightSectionWidth={42}
      {...props}
    />
    </>
  );
}