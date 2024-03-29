import React, { useEffect, useState } from "react";
import { View, Text, Button, ImageBackground } from "react-native";
import { getDeckId } from "../../services/axiosClient";
import { styles } from "./styles";
import bgImg from "../../images/AA.webp";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [idDeck, setIdDeck] = useState(null);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const id = await getDeckId();
      setIdDeck(id);
      setLoading(false);
    };
    get();
  }, []);

  const inciarPartida = async () => {
    navigation.navigate("Game", {
      deckId: idDeck,
    });
  };

  return (
    <ImageBackground
      source={bgImg}
      style={styles.container}
      imageStyle={{ resizeMode: "contain", transform: [{ height: 100 }] }}
    >
      <Text style={styles.title}>Jogo de Cartas</Text>
      <View style={{ flex: 2, justifyContent: "center", paddingTop: "33.5%" }}>
        <Button title="Iniciar Partida" onPress={inciarPartida} />
      </View>
    </ImageBackground>
  );
};

export default Home;