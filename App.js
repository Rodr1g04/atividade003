import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView, Modal, Button } from "react-native";


const descriptions = [
  { id: "1", title: "Champions League", image: "https://editorial.uefa.com/resources/0246-0e98e0b96aae-10e5233c25c8-1000/format/wide1/ucl_branding.jpeg?imwidth=2048", description: "A Champions League é um dos torneios de clubes mais prestigiados do mundo. Disputada por times europeus, a competição reúne as maiores estrelas do futebol, proporcionando jogos eletrizantes e momentos inesquecíveis. Vencer a Champions é um feito desejado por qualquer jogador profissional." },
  
];

const players = [
  { id: "1", name: "Lionel Messi", role: "Atacante", image: "https://cdn.brasil247.com/pb-b247gcp/swp/jtjeq9/media/20240628210624_f2041a01-704e-4239-b8e2-b07871d2c5fe.webp" },
  { id: "2", name: "Cristiano Ronaldo", role: "Atacante", image: "https://lncimg.lance.com.br/cdn-cgi/image/width=1080,quality=75,fit=pad,format=webp/uploads/2025/03/cristiano-ronaldo-al-nassr-scaled-e1741711627695-aspect-ratio-512-320.jpg" },
  { id: "3", name: "Neymar Jr", role: "Atacante", image: "https://lncimg.lance.com.br/cdn-cgi/image/width=1080,quality=75,fit=pad,format=webp/uploads/2021/10/14/6168de280bc05.jpeg" },
  { id: "4", name: "Kevin De Bruyne", role: "Meia", image: "https://premierleaguebrasil.com.br/app/uploads/2024/11/De-Bruyne-Manchester-City-768x523.jpg" },
  { id: "5", name: "Virgil van Dijk", role: "Zagueiro", image: "https://conteudo.imguol.com.br/c/esporte/d6/2022/12/03/virgil-van-dijk-aplaude-classificacao-da-selecao-holandesa-as-quartas-1670089350999_v2_450x600.jpg" },
];
  

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.sectionTitle}>Chapions League</Text>
      {descriptions.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
          <Image source={{ uri: item.image }} style={styles.largeImage} />
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.header}>Melhores Jogares</Text>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
            <Image source={{ uri: item.image }} style={styles.avatar} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.role}>{item.role}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedItem.name || selectedItem.title}</Text>
                <Text style={styles.modalText}>{selectedItem.description || "Jogador de futebol profissional."}</Text>
              </>
            )}
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  card: { flexDirection: "row", alignItems: "center", padding: 10, borderBottomWidth: 1, borderColor: "#ddd" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  role: { fontSize: 14, color: "gray" },
  sectionTitle: { fontSize: 22, fontWeight: "bold", marginTop: 20 },
  largeImage: { width: "100%", height: 200, borderRadius: 10, marginBottom: 16 },
  description: { fontSize: 16, marginBottom: 16 },
  modalContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10, width: "80%", alignItems: "center" },
  modalImage: { width: 200, height: 200, borderRadius: 10 },
  modalTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
  modalText: { fontSize: 16, textAlign: "center" },
});

export default App;
