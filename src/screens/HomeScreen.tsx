import React from 'react';
import { useUserStore } from '../store/useUserStore';
import { Text, View, Image, ScrollView, TextInput, Dimensions, SafeAreaView } from 'react-native';

interface HomeScreenProps {
  route: {
    params: {
      authentication: {
        accessToken: string;
      }
    }
  }
}

const objetos = {
  "sectores": {
    "cocina": [
      { "nombre": "Detergente para platos", "categoria": "limpieza" },
      { "nombre": "Esponja", "categoria": "limpieza" },
      { "nombre": "Papel de cocina", "categoria": "limpieza" },
      { "nombre": "Aceite de oliva", "categoria": "alimentación" },
      { "nombre": "Arroz", "categoria": "alimentación" },
      { "nombre": "Fideos", "categoria": "alimentación" },
      { "nombre": "Sal", "categoria": "alimentación" },
      { "nombre": "Pimienta", "categoria": "alimentación" },
      { "nombre": "Vinagre", "categoria": "alimentación" },
      { "nombre": "Servilletas", "categoria": "descartables" },
      { "nombre": "Film transparente", "categoria": "descartables" },
      { "nombre": "Papel aluminio", "categoria": "descartables" }
    ],
    "baño": [
      { "nombre": "Papel higiénico", "categoria": "descartables" },
      { "nombre": "Jabón de tocador", "categoria": "higiene" },
      { "nombre": "Shampoo", "categoria": "higiene" },
      { "nombre": "Acondicionador", "categoria": "higiene" },
      { "nombre": "Desodorante", "categoria": "higiene" },
      { "nombre": "Limpiador para inodoros", "categoria": "limpieza" },
      { "nombre": "Toallas de papel", "categoria": "descartables" }
    ],
    "lavadero": [
      { "nombre": "Detergente para ropa", "categoria": "limpieza" },
      { "nombre": "Suavizante", "categoria": "limpieza" },
      { "nombre": "Quitamanchas", "categoria": "limpieza" },
      { "nombre": "Escoba", "categoria": "limpieza" },
      { "nombre": "Trapo de piso", "categoria": "limpieza" },
      { "nombre": "Baldes", "categoria": "limpieza" }
    ],
    "dormitorio": [
      { "nombre": "Aromatizante", "categoria": "limpieza" },
      { "nombre": "Toallas", "categoria": "textil" },
      { "nombre": "Sábanas", "categoria": "textil" },
      { "nombre": "Almohadas", "categoria": "textil" }
    ],
    "comedor": [
      { "nombre": "Servilletas", "categoria": "descartables" },
      { "nombre": "Velas", "categoria": "decoración" },
      { "nombre": "Aromatizante", "categoria": "limpieza" },
      { "nombre": "Manteles", "categoria": "textil" }
    ],
    "freezer": [
      { "nombre": "Helado", "categoria": "congelados" },
      { "nombre": "Hamburguesas congeladas", "categoria": "congelados" },
      { "nombre": "Verduras congeladas", "categoria": "congelados" },
      { "nombre": "Empanadas congeladas", "categoria": "congelados" },
      { "nombre": "Pollo congelado", "categoria": "congelados" }
    ],
    "heladera": [
      { "nombre": "Leche", "categoria": "frescos" },
      { "nombre": "Huevos", "categoria": "frescos" },
      { "nombre": "Queso", "categoria": "frescos" },
      { "nombre": "Yogur", "categoria": "frescos" },
      { "nombre": "Fiambres", "categoria": "frescos" },
      { "nombre": "Manteca", "categoria": "frescos" }
    ],
    "despensa": [
      { "nombre": "Café", "categoria": "alimentación" },
      { "nombre": "Yerba", "categoria": "alimentación" },
      { "nombre": "Azúcar", "categoria": "alimentación" },
      { "nombre": "Galletitas", "categoria": "alimentación" },
      { "nombre": "Harina", "categoria": "alimentación" },
      { "nombre": "Salsa de tomate", "categoria": "alimentación" },
      { "nombre": "Conservas", "categoria": "alimentación" }
    ],
    "bebidas": [
      { "nombre": "Agua mineral", "categoria": "bebidas" },
      { "nombre": "Gaseosa", "categoria": "bebidas" },
      { "nombre": "Jugo en caja", "categoria": "bebidas" },
      { "nombre": "Cerveza", "categoria": "bebidas" },
      { "nombre": "Vino", "categoria": "bebidas" }
    ],
    "mascotas": [
      { "nombre": "Alimento para perros", "categoria": "mascotas" },
      { "nombre": "Alimento para gatos", "categoria": "mascotas" },
      { "nombre": "Arena sanitaria", "categoria": "mascotas" },
      { "nombre": "Snacks para perros", "categoria": "mascotas" }
    ],
    "general": [
      { "nombre": "Bolsas de residuos", "categoria": "limpieza" },
      { "nombre": "Alcohol en gel", "categoria": "higiene" },
      { "nombre": "Toallitas desinfectantes", "categoria": "limpieza" },
      { "nombre": "Pilas", "categoria": "otros" },
      { "nombre": "Encendedores", "categoria": "otros" }
    ]
  }
}

const HomeScreen = ({route}:HomeScreenProps) => {
  const user = useUserStore((state) => state.user);

  if (!user) return <Text>Loading...</Text>;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222538' }}>
    <ScrollView style={{ paddingTop: 20, paddingHorizontal: 16, flex: 1 }}>

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        {user.photoURL && <Image source={{ uri: user.photoURL }} style={{ width: 40, height: 40, borderRadius: 40, borderWidth: 1, borderColor: "#fff" }} />}
        <Text style={{
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center'
        }}>Hola, {user.name}!</Text>
      </View>



        <View style={{alignSelf: 'center', marginTop: 20, marginBottom: 20}}>
          <Text style={{
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center'
            }}>
            Comienza a crear tu lista de compras:
          </Text>
        </View>

        <View>
          <TextInput 
            placeholder='Busca un articulo'
            style={{
              backgroundColor: '#fff',
              padding: 10,
              borderRadius: 8,
              color: '#000',
              fontSize: 16,
              marginBottom: 20
            }}
            placeholderTextColor="#888"
            />
        </View>

        <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 10,
          width: '100%',
        }}>
          {Object.entries(objetos.sectores).map(([sector]) => (
            <View key={sector} style={{
              backgroundColor: '#4CAF50',
              width: Dimensions.get('window').width / 2 - 22,
              height: Dimensions.get('window').width / 2 - 22,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              }}>{sector}</Text>
            </View>
          ))}
        </View>


    <View style={{height: 40}} />
    </ScrollView>
    </SafeAreaView>
  );
}


export default HomeScreen;