import {Select, TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons';
import {Cpu_state} from "../App";
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import { useEffect, useState } from 'react';
const AllCpu_state = atom({
  key: 'AllCpu_state', // unique ID (with respect to other atoms/selectors)
  default: [{value: 'value', label: 'value'}], // default value (aka initial value)
});
async function Api(setText:any, text:any, input:string|null) {
  
    console.log("hi")
       try {
        const response = await fetch('http://127.0.0.1:8000/cpu/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"cpu_name": input}),
        });
        const json = await response.json();
        console.log(json);
        setText(json)
        console.log(text)
      } catch (error) {
        console.error(error);
      }
}

async function All() {
  console.log("hi")
  const [option, setOption] = useRecoilState(AllCpu_state);
  const GetMovies = async () => {
    const  result = await fetch("http://127.0.0.1:8000/allcpu", {
      method: 'Get',})
  const json = await result.json();
  let cpujson= json.cpu
  let resulty:any = []
  for(let x in cpujson){
    let party = cpujson[x].join("")
    let input = party.toLowerCase()
    resulty.push({value: input, label: input})
  }
  setOption(resulty)}
  useEffect(() => {
    GetMovies()
  }, [])}

export default function InputWithButton() {
  const theme = useMantineTheme();
  const [text, setText] = useRecoilState(AllCpu_state);
  const [value, setValue] = useState<string | null>(null);
  const [option, setOption] = useRecoilState(Cpu_state);
  //const  result = await fetch("http://127.0.0.1:8000/allcpu")
  //console.log(result)
  All()
  return (
    <Select
      searchable
      onChange={setValue}
      value={value}
      icon={<IconSearch size={18} stroke={1.5} />}
      radius="xl"
      size="md"
      data={text}

      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled" onClick={() => Api(setOption, option,value)}>
          {theme.dir === 'ltr' ? (
            <IconArrowRight size={18} stroke={1.5} />
          ) : (
            <IconArrowLeft size={18} stroke={1.5} />
          )}
        </ActionIcon>
      }
      placeholder="Input cpu"
      rightSectionWidth={42}
    />
  );
}
