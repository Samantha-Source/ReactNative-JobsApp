import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = ({ title, points, split }) => {

  let seperated = [];
  
  if(split) {
    for(let i = 0; i< points.length; i++) {
      const stringPoints = points[i];
      let seperatedPoints = stringPoints.split(', ');
      seperatedPoints.forEach((point) => seperated.push(point))
    }
  } else {
    seperated = points;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {seperated.map((item, idx) => (
          <View style={styles.pointWrapper} key={item + idx}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Specifics