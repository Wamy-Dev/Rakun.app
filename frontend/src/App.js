import './App.css';
import "@fontsource/archivo"
import "@fontsource/montserrat"
import { Center, TextInput, TextInputProps, ActionIcon, useMantineTheme, Container, SimpleGrid} from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';
import rakun from "@lowlighter/rakun"
import Raccoon from "./raccoon.svg"

export function App() {
  return (
    <SimpleGrid cols={1} spacing="xl">
      <Center>
        <h1>rakun.app</h1>
      </Center>
      <Center>
        <img alt="logo" src={Raccoon} style={{width: "200px"}}></img>
        </Center>
      <Center>
        <TextInput
        placeholder="Input anime torrent to view its metdata..."
        radius="xl"
        color='#FCF3EA'
        style={{width: "32vw", minWidth: "320px"}}
        rightSection={
          <ActionIcon size={32} variant="outline" radius="xl" style={{backgroundColor: "#e0e0e0"}} onClick={() => {
            console.log(rakun.parse("[Team246] Ghost in the shell Stand alone complex S01 E10-E15 [BDREMUX 1080P MULTi DTSHDMA 5.1][VOSTFR]"))
          }}>
            {<img alt="logo" src={Raccoon} style={{width: "25px"}}></img>}
          </ActionIcon>
        }
        rightSectionWidth={42}
        />
      </Center>
      <Center>
      <Container px="sm" py="sm" style={{backgroundColor: "#FFFFFF", width: "30vw", borderRadius: "32px", height: "30vw", minWidth: "300px", minHeight: "300px", maxHeight: "300px"}}>
      <SimpleGrid cols={1} spacing="sm">
        <div>
          <p>Thank you for visiting Rakun.app!</p>
          <p>To get started just paste the name of your anime torrent into the bar and click the raccoon.</p>
          <p>This is a simple app that allows you to paste an anime torrent name and get the metadata from it.</p>
          <p>With Rakun, it returns useful things like "subber", "resolution", "audio", "subtitles", "codecs" and more.</p>
          <p>This is just a small project built by pirate weebs for pirate weebs.</p>
        </div>
        </SimpleGrid>
      </Container>
      </Center>
      <Center>
        <Container style={{position: "fixed", bottom: "0px"}}>
        <p className='footer'>Frontend by <a href="https://github.com/Wamy-Dev/Rakun.app" target="_blank" rel="noreferrer" style={{color: "#FCF3EA"}}>@Wamy-Dev</a>, Rakun by <a href="https://github.com/lowlighter/rakun" style={{color: "#FCF3EA"}} target="_blank" rel="noreferrer">@Lowlighter</a></p>
        </Container>
      </Center>
    </SimpleGrid>
  );
}

export default App;
