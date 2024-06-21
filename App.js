import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      img: require("./src/cronometro.png"),
      botao: "INICIAR",
      ultima: null,
    };
    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);
    this.timer = null;
  }

  iniciar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        botao: "INICIAR",
      });
    } else {
      this.timer = setInterval(() => {
        this.setState({
          numero: this.state.numero + 0.1,
        });
      }, 100);
      this.setState({ botao: "PARAR" });
    }
  }

  zerar() {
    if (!this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      numero: 0,
      botao: "VAI",
      ultima: this.state.numero,
    });
  }

  render() {
    return (
      <View style={style.conteiner}>
        <Image style={style.img} source={require("./src/cronometro.png")} />

        <Text style={style.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={style.btnArea}>
          <TouchableOpacity style={style.btn} onPress={this.iniciar}>
            <Text style={style.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btn} onPress={this.zerar}>
            <Text style={style.btnText}>ZERAR</Text>
          </TouchableOpacity>
        </View>

        <View style={style.ultima}>
          <Text style={style.textoUltimo}>
            {this.state.ultima > 0
              ? "Ultimo tempo foi: " + this.state.ultima.toFixed(1)
              : ""}
          </Text>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  conteiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  timer: { marginTop: -160, fontSize: 65, fontWeight: "bold", color: "white" },
  btnArea: { flexDirection: "row", marginTop: 75, height: 40 },
  btn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 10,
    height: 40,
    borderRadius: 5,
  },
  btnText: { color: "blue", fontSize: 20, fontWeight: "bold" },
  ultima: {
    marginTop: 30,
    padding: 10,
  },
  textoUltimo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default App;
/**/
/*class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: require("./src/biscoito.png"),
      frase: "",
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ["Frases 01", "Frases 2", " Frases 3", "Frases 4"];
  }

  quebraBiscoito() {
    let numero = Math.floor(Math.random() * this.frases.length);
    this.setState({
      img: require("./src/biscoitoAberto.png"),
      frase: this.frases[numero],
    });
  }
  render() {
    return (
      <View style={style.conteiner}>
        <Image source={this.state.img} style={style.img} />
        <Text style={style.frase}>{this.state.frase}</Text>

        <TouchableOpacity onPress={this.quebraBiscoito} style={style.botao}>
          <View style={style.btnArea}>
            <Text style={style.btnText}>Clique para quebrar o Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet.create({
  conteiner: { flex: 1, alignItems: "center", justifyContent: "center" },
  img: { width: 250, height: 250 },
  frase: { color: "orange", fontSize: 14, padding: 15 },
  botao: {
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "orange",
    width: 250,
    height: 50,
  },
  btnArea: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  btnText: {
    color: "orange",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
export default App;
*/
