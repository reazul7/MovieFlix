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

          {/* Start Hotest Movie! */}
        <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
              }}
            >
              HOTEST MOVIES!
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, eos. Eum iste magni omnis sunt.
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              paddingLeft: 20,
              paddingRight: 10,
              marginTop: 10,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "http://www.scrolldroll.com/wp-content/uploads/2021/03/Harry-Potter-Series-Best-Hollywood-Movies-About-Magic.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Harry Potter
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Pirates of the Caribbean
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://images-na.ssl-images-amazon.com/images/I/51KjbtEkoeL._AC_.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      The Shawshank Redemption
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://goombastomp.com/wp-content/uploads/2019/12/2de15ed0b566c57eb43fb6590811e88d.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Knives Out
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxHeight: 200,
                }}
              >
                <ImageBackground
                  style={{
                    width: 150,
                    height: 200,
                  }}
                  source={{
                    uri:
                      "https://www.newsbricks.com/root_upld/general-news/2021/04/81214/org_13412202104131700.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Chaos Walking
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
              </View>
              <View style={{ width: 30 }}></View>
            </View>
          </ScrollView>
          {/* Start Hotest Movie! */}


 {/* Newest Movies! */}
          <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
              }}
            >
              NEWEST MOVIES!
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "grey",
                fontWeight: "bold",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              labore est quis ducimus hic dicta.
            </Text>
          </View>
          <ScrollView
            horizontal={true}
            style={{
              paddingLeft: 20,
              paddingRight: 10,
              marginTop: 10,
            }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxWidth: 250,
                }}
              >
                <ImageBackground
                  style={{
                    width: 250,
                    height: 150,
                  }}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiAuGe6CRvODytDYrG6d77q6OLAcMz_3XELg&usqp=CAU",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      A star is born
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    fontSize: 14,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Lorem Ipsum
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor..
                </Text>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxWidth: 250,
                }}
              >
                <ImageBackground
                  style={{
                    width: 250,
                    height: 150,
                  }}
                  source={{
                    uri: "https://deadline.com/wp-content/uploads/2020/10/money-heist-part-4-preview-netflix.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Money Heist
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    fontSize: 14,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Lorem Ipsum
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor..
                </Text>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxWidth: 250,
                }}
              >
                <ImageBackground
                  style={{
                    width: 250,
                    height: 150,
                  }}
                  source={{
                    uri: "https://theglobalcoverage.com/wp-content/uploads/2020/06/maxresdefault-4.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Mission Impossible
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    fontSize: 14,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Lorem Ipsum
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor..
                </Text>
              </View>
              <View
                style={{
                  overflow: "hidden",
                  borderRadius: 10,
                  marginRight: 10,
                  maxWidth: 250,
                }}
              >
                <ImageBackground
                  style={{
                    width: 250,
                    height: 150,
                  }}
                  source={{
                    uri: "https://i.redd.it/54mgjf647gn61.jpg",
                  }}
                >
                  <View style={{ position: "absolute", bottom: 20, left: 20 }}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Edge of the World
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      <Feather name="star" size={18} color="white" /> 5
                    </Text>
                  </View>
                </ImageBackground>
                <Text
                  style={{
                    fontSize: 14,
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  Lorem Ipsum
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "grey",
                    fontWeight: "bold",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor..
                </Text>
              </View>
              <View style={{ width: 30 }}></View>
            </View>
          </ScrollView>
          <View
            style={{
              height: 30,
            }}
             // trying
          ></View>
          
        </ScrollView>
      </View>
    );
  }
}

export default App;
