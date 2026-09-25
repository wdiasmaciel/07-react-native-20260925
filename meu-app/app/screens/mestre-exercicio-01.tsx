import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function TelaMestra() {
  const router = useRouter();

  const handleNavigation = (dado: { id: number; nome: string; preco: number }) => {
      // Em expo-router, use o pathname absoluto da rota.
    router.push({ pathname: '/screens/detalhe', params: dado });
  };

  const produto = { id: 123, nome: 'Produto X', preco: 199.99 };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Mestra</Text>

      <TouchableOpacity style={styles.botao} onPress={() => handleNavigation(produto)}>
        <Text style={styles.textoBotao}>
          Ir para a Tela de Detalhes do Produto
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
  },
  botao: {
    width: '100%',
    paddingVertical: 12,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: '#1D4ED8', // azul-700 do Tailwind
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});

