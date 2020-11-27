import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Button } from 'react-native';

export default function App() {
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState("");
  const [boxState, setBox] = useState([[0,0,0],[0,0,0],[0,0,0]]);

  //arrow function to put the accurate symbols on the box depending on the player
  takeTurn = (row, col) => {
    var turn = boxState[row][col];
    if (turn == 1) {
      return <Text style={styles.textO}>O</Text>;
    }
    if (turn == -2) {
      return <Text style={styles.textX}>X</Text>;
    }
    else {
      return <View/>
    }
  }

  //for setting player and putting symbols on the game boxes
  handler = (row, col) => {
    //add X or O to the game boxes acording to player's turns
    if (boxState[row][col] !== 0) {
      return;
    }
    var array = boxState;
    array[row][col] = player;
    setBox(array);

    //change to next player after previous player's turn
    setPlayer((player == 1) ? -2 : 1);

    //check if there is a winner after every turn before continuing the game further
    checkResult();
    if (winner == "Player 1") {
      Alert.alert("Player 1 wins. New game will begin.");
      newGame();
    }
    else if (winner == "Player 2") {
      Alert.alert("Player 2 wins. New game will begin.");
      newGame();
    }
  }

  //arrow function for checking and setting the winner
  checkResult = () => {
    var arr = boxState;
    var sum = 0;
    for (var i=0; i<3; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        setWinner("Player 1");
        return;
      }
      else if (sum == -6) {
        setWinner("Player 2");
        return;
      }
    }
    for (var j=0; j<3; j++) {
      sum = arr[0][j] + arr[1][j] + arr[2][j];
      if (sum == 3) {
        setWinner("Player 1");
        return;
      }
      else if (sum == -6) {
        setWinner("Player 2");
        return;
      }
    }
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      setWinner("Player 1");
      return;
    }
    else if (sum == -6) {
      setWinner("Player 2");
      return;
    }
    sum = arr[0][2] + arr[1][1] + arr[2][0];
    if (sum == 3) {
      setWinner("Player 1");
      return;
    }
    else if (sum == -6) {
      setWinner("Player 2");
      return;
    }
    return;
  }

  //function for starting a new game
  newGame = () => {
    setBox([[0,0,0],[0,0,0],[0,0,0]]);
    setPlayer(1);
    setWinner("");
  }

  return (
    <View style={styles.container}>
    <Text style={{fontSize:40, fontWeight:'bold', fontFamily:'monospace', color:'lightskyblue', marginBottom:30,}}>TIC TAC TOE</Text>
     <Text style={{fontSize:20, fontFamily:'arial', color:'black'}}>Player 1 => O</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=> handler(0,0)} style={styles.box}>
            {takeTurn(0,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handler(0,1)} style={styles.box}>
            {takeTurn(0,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handler(0,2)} style={styles.box}>
            {takeTurn(0,2)}
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=> handler(1,0)} style={styles.box}>
            {takeTurn(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handler(1,1)} style={styles.box}>
            {takeTurn(1,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handler(1,2)} style={styles.box}>
            {takeTurn(1,2)}
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=> handler(2,0)} style={styles.box}>
            {takeTurn(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handler(2,1)} style={styles.box}>
            {takeTurn(2,1)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> handler(2,2)} style={styles.box}>
            {takeTurn(2,2)}
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{fontSize:20, fontFamily:'arial', color:'black',}}>Player 2 => X</Text>
      <View style={styles.newBtn}><Button title="New Game" onPress={newGame} color= 'coral'></Button></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666699',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    backgroundColor: 'lavender',
    height : 360,
    width: 360,
  },
  row: {
    flexDirection : "row", 
  },
  box: {
    borderColor: 'black',
    borderWidth: 4,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textO: {
    color : 'red',
    fontSize: 50,
    fontWeight: 'thick',
  },
  textX: {
    color : 'green',
    fontSize: 50,
    fontWeight: 'thick',
  },
  newBtn: {
    paddingTop: 25,
  },
});
