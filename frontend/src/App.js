import React, { useState } from "react";
import { isSafari, isIOS, isIE, CustomView } from 'react-device-detect';
import './App.css';
import "@fontsource/archivo"
import "@fontsource/montserrat"
import { Center, TextInput, ActionIcon, Container, SimpleGrid, Tooltip } from '@mantine/core';
import rakun from "@lowlighter/rakun"
import Raccoon from './raccoon.svg'
import * as rdd from 'react-device-detect';

rdd.isSafari = true;
export function App() {
  const [display, setDisplay] = useState("block");
  const [displayresults, setDisplayresults] = useState("none");
  const [torrentname, setTorrentname] = useState("");
  const [empty, setempty] = useState(false);
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    if (torrentname.length > 2){
      setDisplay("none")
      setDisplayresults("block")
      try {
        const data = rakun.parse(torrentname)
        setData(data)
      } catch (e) {
        console.log("fails")
      }
    } else {
      setempty(true)
    }
  }
    return (
    <>
    <SimpleGrid cols={1} spacing="xl">
      <Center>
        <h1>rakun.app</h1>
      </Center>
      <Center>
        <img alt="logo" src={Raccoon} style={{width: "200px"}}></img>
      </Center>
      <Center>
        <Tooltip
        opened={empty}
        label="Please enter torrent name."
        radius="xl"
        withArrow
        color="gray">
        <TextInput
        onMouseLeave={() => setempty(false)}
        value={torrentname} 
        type="text"
        className="textbox"
        onKeyPress={event => {
          if (event.key === 'Enter') {
            handleSubmit()
          }
        }}
        onChange={(e) => {
          if (e.target.value.length > 0){
            setTorrentname(e.target.value)
          } else {
            setTorrentname(e.target.value)
            setDisplayresults("none")
            setDisplay("block")
          }
        }}
        placeholder="Input anime torrent to view its metdata..."
        radius="xl"  
        style={{ width: "32vw", minWidth: "320px" }}
        rightSection={
          <ActionIcon 
          size={32} 
          variant="outline" 
          radius="xl" 
          style={{backgroundColor: "#e0e0e0"}} 
          onClick={() => {
            handleSubmit()
          }}>
          {<img alt="logo" src={Raccoon} style={{width: "25px"}}></img>}
          </ActionIcon>
        }
        rightSectionWidth={42}/>
        </Tooltip>
      </Center>
      <Center>
      <Container className="container" px="sm" py="sm" style={{ width: "30vw", borderRadius: "32px", height: "30vw", minWidth: "300px", minHeight: "300px", maxHeight: "300px", display: `${display}`}}>
        <SimpleGrid cols={1} spacing="sm">
          <div>
            <p>Thank you for visiting rakun.app!</p>
            <p>To get started just paste the name of your anime torrent into the bar and click the raccoon.</p>
            <p>This is a simple app that allows you to paste an anime torrent name and get the metadata from it.</p>
            <p>With rakun, it returns useful things like "subber", "resolution", "audio", "subtitles", "codecs" and more.</p>
            <p>This is just a small project built by pirate weebs for pirate weebs.</p>
          </div>
        </SimpleGrid>
      </Container>
      <Container className="container" px="sm" py="sm" style={{ width: "30vw", borderRadius: "32px", height: "30vw", minWidth: "300px", minHeight: "300px", maxHeight: "300px", display: `${displayresults}`}}>
        <SimpleGrid cols={1} spacing="sm">
          <div>
            <p>Name: {data.name}</p>
            <p>Resolution: {data.resolution}</p>
            <p>Audio Codecs: {data.codecs}</p>
            <p>Source: {data.source}</p>
            <p>Season: {data.season}</p>
            <p>Subber: {data.subber}</p>
            <p>Subtitles: {data.subtitles}</p>
            <p>Meta: {data.meta}</p>  
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
    <CustomView condition={isIE===true || isIOS===true || isSafari===true}>
        <SimpleGrid cols={1} spacing="xl">
        <Center>
          <h1>
            rakun.app
          </h1>
          </Center>
          <Center>
          <p className='footer'>
            Unfortunately rakun.app is not available on this browser. Due to <a href="https://caniuse.com/js-regexp-lookbehind" target="_blank" rel="noreferrer" style={{color: "#FCF3EA"}}>regex lookbehind</a> not being supported Safari, IE, and iOS. Please visit on a different device or browser.
          </p>
          </Center>
        </SimpleGrid>
      </CustomView>
    </>
    );
  }

export default App;
