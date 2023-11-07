import {View,StyleSheet,SafeAreaView,Text,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const arrButtons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];
const arrOperators = ['+', '-', '*', '/'];

function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('0');
  console.log('1', firstNumber);
  console.log('2', operator);
  console.log('3', secondNumber);

  const checkOperator = (a, b, opr) => {
    switch (opr) {
      case '+':
        return +a + +b;
      case '-':
        return +a - +b;
      case '*':
        return +a * +b;
      case '/':
        return +a / +b;
      default:
        break;
    }
  };
  const numberPress = (num: string) => {
    if (!secondNumber && !operator) {
      setFirstNumber(firstNumber + num);
      setResult(firstNumber + num);
    } else if (operator) {
      setSecondNumber(secondNumber + num);
      setResult(secondNumber + num);
    }
  };
  const operatorPress = (opr: string) => {
    if (firstNumber && secondNumber) {
      const oprResult = checkOperator(firstNumber, secondNumber, operator);
      setResult(oprResult);
      setFirstNumber(oprResult);
      setSecondNumber('');
      setOperator('');
    }
    console.log(opr);
    setOperator(opr);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.actionArea} />
      <View style={styles.main}>
      <View style={styles.buttons}>
        {arrButtons.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => numberPress(item)}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.oprArea}>
        {arrOperators.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.oprButton}
              onPress={() => operatorPress(item)}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      </View>
    </SafeAreaView>
  );
}
export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  main:{
    flexDirection:"row",
    width:"100%",
    height:"60%"
  },
  result:{
    height:"40%",
    backgroundColor:"black",
    justifyContent:"flex-end",
    alignItems:"flex-end",
  },
  resultText: {
    fontSize: 90,
    color: 'white',
    fontWeight: '300',
    marginRight:20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '74%',
    justifyContent: 'center',
  },
  button: {
    width: '31%',
    height: "22%",
    margin:3.2,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  oprButton: {
    width: '90%',
    height:"22%",
    margin:4,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 40,
    color: 'white',
  },
  actionArea: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
  },
  oprArea: {
    width: '26%',
    alignItems: 'center',
    flexWrap:"wrap",
  },
});
