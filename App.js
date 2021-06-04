import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  StatusBar,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar hidden />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              overflow: "hidden",
              borderBottomRightRadius: 50,
            }}
          >
            <ImageBackground
              style={{
                width: "100%",
                height: 250,
              }}
              source={{
                uri:
                  "https://png.pngtree.com/thumb_back/fh260/back_pic/03/54/58/35579acf3576e9d.jpg",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  marginTop: 20,
                }}
              >
                <View>
                  <MaterialCommunityIcons name="text" size={24} color="white" />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      marginRight: 20,
                    }}
                  >
                    <Feather name="bell" size={22} color="white" />
                  </View>
                  <View>
                    <Feather name="search" size={22} color="white" />
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  flex: 1,
                  marginTop: -15,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Hello Movie Lovers People,
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Hope you have a great day!
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 10,
                      marginTop: 5,
                      backgroundColor: "grey",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      VIP MEMBERSHIP
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        {/* end home banner */}
        </ScrollView>
      </View>
    );
  }
}

export default App;