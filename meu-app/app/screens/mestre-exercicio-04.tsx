import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

interface Produto { id: number; nome: string; preco: number; }

export default function TelaMestra() {
  const router = useRouter();
  
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const idNumerico = Number(id);
  const precoNumerico = Number(preco.replace(',', '.'));
  const dadosValidos =
    id.trim() !== '' &&
    Number.isInteger(idNumerico) &&
    nome.trim() !== '' &&
    preco.trim() !== '' &&
    Number.isFinite(precoNumerico) &&
    precoNumerico >= 0;

  const handleNavigation = () => {
    if (!dadosValidos) return;

    const dado: Produto = { id: idNumerico, nome: nome.trim(), preco: precoNumerico };
    router.push({
      pathname: '/screens/detalhe',
      params: {
        id: String(dado.id),
        nome: dado.nome,
        preco: String(dado.preco),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Mestra</Text>

      <Text style={styles.rotulo}>ID do produto</Text>
      <TextInput
        style={styles.campo}
        value={id}
        onChangeText={setId}
        placeholder="Ex.: 123"
        keyboardType="numeric"
      />

      <Text style={styles.rotulo}>Nome</Text>
      <TextInput
        style={styles.campo}
        value={nome}
        onChangeText={setNome}
        placeholder="Nome do produto"
        autoCapitalize="words"
      />

      <Text style={styles.rotulo}>Preço</Text>
      <TextInput
        style={styles.campo}
        value={preco}
        onChangeText={setPreco}
        placeholder="Ex.: 199,99"
        keyboardType="decimal-pad"
      />

      <TouchableOpacity
        style={[styles.botao, !dadosValidos && styles.botaoDesabilitado]}
        onPress={handleNavigation}
        disabled={!dadosValidos}
      >
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
  rotulo: {
    fontSize: 16,
    marginBottom: 6,
  },
  campo: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#9CA3AF',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
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
  botaoDesabilitado: {
    opacity: 0.5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});

