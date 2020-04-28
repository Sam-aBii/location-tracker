import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

function NavLink({ navigation, text, routeName }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#f8f8f7",
  },
});

export default withNavigation(NavLink);
