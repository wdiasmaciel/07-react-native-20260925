import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function TelaDeDetalhe() {
  // Usando expo-router para navegação baseada em arquivos:
  const router = useRouter();
  const params = useLocalSearchParams();

  // Parâmetros recebidos via router.push:
  const { id, nome, preco } = (params as { id?: number | string; nome?: string; preco?: number | string }) || {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>

      {id && nome && preco ? (
        <Text style={styles.detalhe}>
          Exibindo detalhes para: ID {id}, Nome: {nome}, Preço: {preco}
        </Text>
      ) : (
        <Text style={styles.detalhe}>Nenhum dado de produto encontrado.</Text>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push('/screens/mestre')}
      >
        <Text style={styles.textoBotao}>Voltar para a Tela Mestra</Text>
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
  detalhe: {
    width: '100%',
    padding: 12,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: '#EF4444', // vermelho-500 do Tailwind
    color: '#fff',
    fontSize: 16,
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
