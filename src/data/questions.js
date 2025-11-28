const questions = [
  {
    id: 1,
    title: "1",
    questions: [
      {
        text: `return <_____ style={{ flex: 1 }}></_____;>`,
        options: ["Div", "View", "Box", "Container"],
        answer: "View",
      },
      {
        text: `<_____>{items.map(renderItem)}</_____>`,
        options: ["Scroll", "ScrollContainer", "ScrollView", "ViewScroll"],
        answer: "ScrollView",
      },
      {
        text: `<_____ style={{ flex: 1 }}>`,
        options: ["SafeArea", "SafeAreaView", "NotchView", "ProtectedView"],
        answer: "SafeAreaView"
      },
      {
        text: `<ScrollView horizontal={_____}>`,
        options: [`"true"`, `true`, `True`, `enable`],
        answer: `true`
      },
      {
        text: `<View style={{ justifyContent: "center", _____: "center" }}>`,
        options: ["screenAlign", "textAlign", "alignItems", "alignContent"],
        answer: "alignItems"
      },
      {
        text: `<ScrollView showsVerticalScrollIndicator={_____}>`,
        options: [`"false"`, "false", "0", "off"],
        answer: "false"
      },
      {
        text: `import { SafeAreaView } from "_____";`,
        options: ["react", "react-navigation", "expo", "react-native"],
        answer: "react-native"
      },
      {
        text: `<_____ style={{ padding: 20 }}>`,
        options: ["Box", "Section", "View", "ContainerView"],
        answer: "View"
      },
      {
        text: `<View style={{ flexDirection: "_____" }}>`,
        options: ["row", "column", "inline", "horizontal"],
        answer: "row"
      },
      {
        text: `<Text style={{ fontSize: 24, fontWeight: "_____" }}>Olá</Text>`,
        options: ["strong", "600", "bold", "heavy"],
        answer: "bold"
      }
    ],
  },

  {
    id: 2,
    title: "2",
    questions: [
      {
        text: "Componente usado para exibir textos:_____.",
        options: [
          "Text",
          "Button",
          "Pressable",
          "View"
        ],
        answer: "Text",
      },
      {
        text: "Para permitir que o usuário digite informações, utilizamos o _____.",
        options: [
          "TouchableOpacity",
          "Text",
          "TextInput",
          "Placeholder"
        ],
        answer: "TextInput",
      },
      {
        text: "Qual o componente que não exibe nenhum feedback visual ao ser tocado?",
        options: [
          "Button",
          "TouchableOpacity",
          "TouchableWithoutFeedback",
          "TextInput"
        ],
        answer: "TouchableWithoutFeedback",
      },
      {
        text: "<TextInput value={nome} onChangeText={_____}/>",
        options: [
          "nome",
          "setNome",
          "onNome",
          "change"
        ],
        answer: "setNome",
      },
      {
        text: "<TouchableWithoutFeedback onPress={}>",
        options: [
          "() => {}",
          "'click'",
          "{click()}",
          "press()"
        ],
        answer: "() => {}",
      },
      {
        text: "Ideal para personalizar pressões longas, curtas e eventos de toque.",
        options: [
          "Pressable",
          "TouchableWithoutFeedback",
          "Button",
          "TextInput"
        ],
        answer: "Pressable",
      },
      {
        text: "Para criar um campo onde o usuário possa escrever um nome, senha ou email, usamos o _____.",
        options: [
          "Button",
          "Pressable",
          "TextInput",
          "TouchableOpacity"
        ],
        answer: "TextInput",
      },
      {
        text: "<TextInput placeholder='Digite...' _____ />",
        options: [
          "placeholderColor",
          "placeholderStyle",
          "style={{}}",
          "color='gray'"
        ],
        answer: "style={{}}",
      },
      {
        text: "<Button title='Salvar' onPress={_____} />",
        options: [
          "save",
          "() => save()",
          "save()",
          "onSave()"
        ],
        answer: "() => save()",
      },
      {
        text: "<Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : _____ })}>",
        options: [
          "1",
          "2",
          "0",
          "false"
        ],
        answer: "1",
      },
    ],
  },

  {
    id: 3,
    title: "3",
    questions: [
      {
        text: `const styles = StyleSheet._____({
  container: { flex: 1 }
});`,
        options: [
          "make",
          "create",
          "style",
          "new"
        ],
        answer: "create",
      },
      {
        text: "Estilos criados diretamente dentro do componente, usando {}, são chamados de _____. ",
        options: [
          "inline",
          "externo",
          "global",
          "styled"
        ],
        answer: "inline",
      },
      {
        text: "<View style={styles._____}>",
        options: [
          "class",
          "container",
          "view",
          "box"
        ],
        answer: "container",
      },
      {
        text: "<Text style={{ color: '_____' }}>Olá</Text>",
        options: [
          "blue",
          "'#blue'",
          "(blue)",
          "{blue}"
        ],
        answer: "blue",
      },
      {
        text: "Para organizar vários estilos de forma separada e reaproveitável, utilizamos o _____. ",
        options: [
          "class",
          "inline",
          "TextInput",
          "StyleSheet"
        ],
        answer: "StyleSheet",
      },
      {
        text: "O tipo de estilo que geralmente deixa o código mais limpo e fácil de manter é o _____.  ",
        options: [
          "StyleSheet",
          "inline",
          "Button",
          "styled"
        ],
        answer: "StyleSheet ",
      },
      {
        text: "Quando for aplicar rapidamente um estilo simples sem criar um arquivo separado, pode-se usar estilo _____.  ",
        options: [
          "class",
          "Pressable",
          "StyleSheet",
          "inline"
        ],
        answer: "inline",
      },
      {
        text: "<View style={[styles.box, { opacity: _____ }]} />",
        options: [
          "1",
          "'1'",
          "100",
          "true"
        ],
        answer: "1",
      },
      {
        text: "<Text style={{ textAlign: '_____' }}>",
        options: [
          "middle",
          "center",
          "align",
          "mid"
        ],
        answer: "center",
      },
      {
        text: "Para criar estilos com StyleSheet, usamos o método _____.  ",
        options: [
          "StyleSheet.create",
          "build",
          "StyleSheet.build ",
          "StyleSheet.make"
        ],
        answer: "StyleSheet.create",
      },
    ],
  },

  {
    id: 4,
    title: "4",
    questions: [
      {
        text: "Para criar navegação em stack, se usa o _____.",
        options: [
          "createBottomTabNavigator",
          "createStackNavigator",
          "createDrawerNavigator",
          "navigator"
        ],
        answer: "createStackNavigator",
      },
      {
        text: "const Stack = createNativeStackNavigator(_____);",
        options: [
          "{}",
          "()",
          "[]",
          "null"
        ],
        answer: "()",
      },
      {
        text: "Para navegar para outra tela no React Navigation, utilizamos o método _____. ",
        options: [
          "navigation.go",
          "navigation.run",
          "navigation.open",
          "navigation.navigate"
        ],
        answer: "navigation.navigate",
      },
      {
        text: "A navegação lateral, que abre um menu tipo “gaveta”, utiliza o _____. ",
        options: [
          "createDrawerNavigator",
          "Pressable",
          "createStackNavigator",
          "menuNavigator"
        ],
        answer: "createDrawerNavigator",
      },
      {
        text: `<NavigationContainer>
  <_____>`,
        options: [
          "Stack.Screen",
          "Stack.Navigator",
          "Navigation.Screen",
          "App.Stack"
        ],
        answer: "Stack.Navigator",
      },
      {
        text: "A navegação em abas na parte inferior do app é feita com o _____. ",
        options: [
          "run",
          "createBottomTabNavigator",
          "createStackNavigator",
          "TextInput"
        ],
        answer: "createBottomTabNavigator",
      },
      {
        text: "Para envolver toda a aplicação e habilitar a navegação, é necessário usar o componente _____.",
        options: [
          "NavigationWrapper",
          "appContainer",
          "NavigationContainer",
          "AppContainer"
        ],
        answer: "NavigationContainer",
      },
      {
        text: "<Stack.Screen name='Home' component={_____} />",
        options: [
          "'HomeScreen'",
          "HomeScreen",
          "(HomeScreen)",
          "Home.Screen"
        ],
        answer: "HomeScreen",
      },
      {
        text: "const { id } = route._____;",
        options: [
          "params",
          "data",
          "query",
          "props"
        ],
        answer: "params",
      },
      {
        text: `<NavigationContainer>
  <Stack._____>`,
        options: [
          "Screen",
          "Screens",
          "Navigator",
          "Route"
        ],
        answer: "Navigator",
      },
    ],
  },

  {
    id: 5,
    title: "5",
    questions: [
      {
        text: "Para criar pilhas de telas (navegação em stack), usamos o _____.",
        options: [
          "createStackNavigator",
          "createBottomTabNavigator",
          "createDrawerNavigator",
          "stackNavigator"
        ],
        answer: "createStackNavigator",
      },
      {
        text: "{Items.map(item => <Text key={item.id}>{_____}</Text>)}",
        options: [
          "item",
          "item.name",
          "{item.nome}",
          "{name}"
        ],
        answer: "item.name",
      },
      {
        text: "Para navegar para outra tela no React Navigation, utilizamos o método _____.",
        options: [
          "navigation.navigate",
          "navigation.open",
          "navigation.run",
          "navigation.push"
        ],
        answer: "navigation.navigate",
      },
      {
        text: "<Text{props._____}</Text>",
        options: [
          "children",
          "text",
          "label",
          "name"
        ],
        answer: "children",
      },
      {
        text: "A navegação em abas na parte inferior do app é feita com o _____.",
        options: [
          "createBottomTabNavigator",
          "createStackNavigator",
          "TextInput",
          "tabsNavigator"
        ],
        answer: "createBottomTabNavigator",
      },
      {
        text: "<Button onPress={() => _____('clicou')} />",
        options: [
          "createStackNavigator",
          "createBottomTabNavigator",
          "createDrawerNavigator",
          "navigate"
        ],
        answer: "createStackNavigator",
      },
      {
        text: "A navegação lateral, que abre um menu tipo “gaveta”, utiliza o _____.",
        options: [
          "createDrawerNavigator",
          "createStackNavigator",
          "Pressable",
          "drawerNavigator"
        ],
        answer: "createDrawerNavigator",
      },
      {
        text: `<_____>
          <Text>A</Text>
          <Text>B</Text>
        <_____>`,
        options: [
          "Fragment",
          "<>",
          "[]",
          "{}"
        ],
        answer: "<>",
      },
      {
        text: "Para envolver toda a aplicação e habilitar a navegação, é necessário usar o componente _____.",
        options: [
          "NavigationContainer",
          "AppContainer",
          "NavigationWrapper",
          "RootNavigator"
        ],
        answer: "NavigationContainer",
      },
      {
        text: "return ( <_____><Text>Olá</Text></_____> )",
        options: [
          "Text",
          "View",
          "Box",
          "Container"
        ],
        answer: "View",
      },
    ],
  },

  {
    id: 6,
    title: "6",
    questions: [
      {
        text: "O hook usado para armazenar e atualizar valores dentro do componente é o _____.",
        options: [
          "useState",
          "useEffect",
          "useMemo",
          "useReducer"
        ],
        answer: "useState",
      },
      {
        text: "const [count, setCount] = _____(0)",
        options: [
          "State",
          "useState",
          "createState",
          "newState"
        ],
        answer: "useState",
      },
      {
        text: "O hook utilizado para executar efeitos colaterais, como buscar dados ou reagir a mudanças, é o _____.",
        options: [
          "useEffect",
          "useState",
          "useId",
          "useLayoutEffect"
        ],
        answer: "useEffect",
      },
      {
        text: `useEffect(() => {
          console.log("Start")
          }, ______)`,
        options: [
          "0",
          "null",
          "[]",
          "{}"
        ],
        answer: "[]",
      },
      {
        text: "O useState retorna um valor e uma função, normalmente chamada de _____.",
        options: [
          "setAlgumaCoisa",
          "updateValue",
          "change",
          "modify"
        ],
        answer: "setAlgumaCoisa",
      },
      {
        text: `useEffect(() => {
          console.log(value)
          }, [_____])`,
        options: [
          "value",
          "'value'",
          "{value}",
          "[value]"
        ],
        answer: "value",
      },
      {
        text: "Para executar um código apenas uma vez quando o componente monta, usamos useEffect com o array de dependências _____.",
        options: [
          "[]",
          "[value]",
          "[null]",
          "[0]"
        ],
        answer: "[]",
      },
      {
        text: `useEffect(() => {
          fetchData()
          }, [_____])`,
        options: [
          "fetchData",
          "() => fetchData()",
          "data",
          "[]"
        ],
        answer: "[]",
      },
      {
        text: "Quando queremos que o useEffect execute toda vez que uma variável mudar, colocamos essa variável no _____.",
        options: [
          "array de dependências",
          "return",
          "useState",
          "callback"
        ],
        answer: "array de dependências",
      },
      {
        text: "const [open, setOpen] = useSate(_____)",
        options: [
          "false",
          "0",
          "false",
          "null"
        ],
        answer: "false",
      },
    ],
  },

  {
    id: 7,
    title: "7",
    questions: [
      {
        text: "O AsyncStorage permite _____ dados no dispositivo do usuário.",
        options: [
          "salvar e ler",
          "enviar para a API",
          "desenhar elementos",
          "compilar"
        ],
        answer: "salvar e ler",
      },

      {
        text: 'awat AsyncStorage.setItem("user", _____)',
        options: [
          "user",
          "{user}",
          "JSON.stringify(user)",
          "stringify(user)"
        ],
        answer: "JSON.stringify(user)",
      },

      {
        text: "Para salvar um valor no AsyncStorage, usamos o método _____.",
        options: [
          "setItem",
          "saveValue",
          "write",
          "store"
        ],
        answer: "setItem",
      },

      {
        text: 'const data = awat AsyncStorage._____("user")',
        options: [
          "get",
          "read",
          "getItem",
          "fetch"
        ],
        answer: "getItem",
      },
      
      {
        text: "Para recuperar um valor salvo no AsyncStorage, utilizamos o método _____.",
        options: [
          "getItem",
          "fetch",
          "restore",
          "read"
        ],
        answer: "getItem",
      },

      {
        text: "const obj = JSON._____(data)",
        options: [
          "parse",
          "convert",
          "json",
          "toObject"
        ],
        answer: "parse",
      },

      {
        text: "Os valores armazenados no AsyncStorage precisam estar no formato _____.",
        options: [
          "string",
          "number",
          "boolean",
          "array"
        ],
        answer: "string",
      },

      {
        text: 'import AsyncStorage from "@react-native-async-storage/____"',
        options: [
          "async",
          "storage",
          "asyncstorage",
          "local"
        ],
        answer: "storage",
      },

      {
        text: "Quando queremos apagar uma informação salva no AsyncStorage, utilizamos o _____.",
        options: [
          "removeItem",
          "delete",
          "clearValue",
          "dropItem"
        ],
        answer: "removeItem",
      },

      {
        text: "AsyncStorage._____()",
        options: [
          "removeAll",
          "reset",
          "clear",
          "destroy"
        ],
        answer: "clear",
      },

    ],
  },

  {
    id: 8,
    title: "8",
    questions: [
      {
        text: "O método nativo do JavaScript para fazer requisições HTTP é o _____.",
        options: [
          "fetch",
          "axios",
          "requestJS",
          "httpRequest"
        ],
        answer: "fetch",
      },

      {
        text: 'fetch("https://api.com/user").then(res => res._____())',
        options: [
          "parse",
          "json",
          "get",
          "toJson"
        ],
        answer: "json",
      },

      {
        text: "A biblioteca que facilita requisições e já retorna JSON automaticamente é o _____.",
        options: [
          "axios",
          "fetch",
          "navigator",
          "httpLib"
        ],
        answer: "axios",
      },

      {
        text: 'fetch(url, { method:"_____", body: JSON.stringify(obj) })',
        options: [
          "SEND",
          "POST",
          "SENDPOST",
          "PUSH"
        ],
        answer: "POST",
      },

      {
        text: "Com o fetch, para transformar a resposta em JSON, usamos o método _____.",
        options: [
          "response.json()",
          "response.convert()",
          "response.toJson()",
          "response.parse()"
        ],
        answer: "response.json()",
      },

      {
        text: 'headers: {"Content-Type": "application/_____" }',
        options: [
          "txt",
          "json",
          "js",
          "data"
        ],
        answer: "json",
      },

      {
        text: "Com o Axios, o corpo da resposta normalmente fica em _____.",
        options: [
          "response.data",
          "response.body",
          "response.json",
          "response.value"
        ],
        answer: "response.data",
      },

      {
        text: 'axios.get("https://api.com/user").then(res => res._____)',
        options: [
          "data",
          "body",
          "content",
          "value"
        ],
        answer: "data",
      },

      {
        text: "Para fazer uma requisição GET usando Axios, utilizamos o método _____.",
        options: [
          "axios.get",
          "axios.fetch",
          "axios.find",
          "axios.requestGet"
        ],
        answer: "axios.get",
      },


      {
        text: `useEffect(() => {
          fetchData()
          }, _____)`,
        options: [
          "{fetchData}",
          "{}",
          "[]",
          `["fetchData"]`
        ],
        answer: "[]",
      },
    ],
  }
];

export default questions;