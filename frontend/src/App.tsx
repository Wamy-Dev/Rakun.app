import './App.css';
import "@fontsource/archivo"
import "@fontsource/montserrat"
import { Center, TextInput, TextInputProps, ActionIcon, useMantineTheme, Container, SimpleGrid} from '@mantine/core';
import { Search, ArrowRight, ArrowLeft } from 'tabler-icons-react';
import rakun from "@lowlighter/rakun"

export function App() {
  return (
    <SimpleGrid cols={1} spacing="xl">
      <Center>
        <img></img>
      </Center>
      <Center>
        <TextInput
        placeholder="Input your anime torrent to view its metdata."
        radius="xl"
        color='#FCF3EA'
        style={{width: "32vw", minWidth: "320px"}}
        rightSection={
          <ActionIcon size={32} radius="xl" color="gray[0]" variant="filled" onClick={() => {
            console.log(rakun.parse("[Team246] Ghost in the shell Stand alone complex S01 E10-E15 [BDREMUX 1080P MULTi DTSHDMA 5.1][VOSTFR]"))
          }}>
            {<ArrowRight size={18} />}
          </ActionIcon>
        }
        rightSectionWidth={42}
        />
      </Center>
      <Center>
      <Container px="sm" py="sm" style={{backgroundColor: "#FFFFFF", width: "30vw", borderRadius: "30px", height: "30vw", minWidth: "300px", minHeight: "300px"}}>
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
        <p className='footer'>Frontend by @Wamy-Dev, Rakun by @Lowlighter</p>
      </Center>
    </SimpleGrid>
  );
}

export default App;
