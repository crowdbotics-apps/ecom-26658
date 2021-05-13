import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_418_9416}>
        <View style={styles.View_418_9417}>
          <View style={styles.View_418_9418}>
            <View style={styles.View_418_9419} />
            <View style={styles.View_418_9420}>
              <View style={styles.View_418_9421} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92da/3c94/78a982fb8701b0aa8a72b1e51cc01250"
                }}
                style={styles.ImageBackground_418_9422}
              />
            </View>
          </View>
          <View style={styles.View_418_9423}>
            <View style={styles.View_418_9424}>
              <Text style={styles.Text_418_9424}>Men</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/662a/b069/f3eb6aa1b000864449bf87f586fccade"
              }}
              style={styles.ImageBackground_418_9425}
            />
          </View>
          <View style={styles.View_418_9426}>
            <Text style={styles.Text_418_9426}>shoes,loefers,watches</Text>
          </View>
        </View>
        <View style={styles.View_685_437}>
          <View style={styles.View_685_438} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cd2/0cb5/8fd2867951eb5a77e3966912b123fe97"
            }}
            style={styles.ImageBackground_685_439}
          />
        </View>
      </View>
      <View style={styles.View_418_9441}>
        <View style={styles.View_418_9442} />
        <View style={styles.View_418_9443}>
          <View style={styles.View_418_9444}>
            <View style={styles.View_418_9445} />
            <View style={styles.View_418_9446}>
              <View style={styles.View_418_9447} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92da/3c94/78a982fb8701b0aa8a72b1e51cc01250"
                }}
                style={styles.ImageBackground_418_9448}
              />
            </View>
          </View>
          <View style={styles.View_418_9449}>
            <View style={styles.View_418_9450}>
              <Text style={styles.Text_418_9450}>Women</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/662a/b069/f3eb6aa1b000864449bf87f586fccade"
              }}
              style={styles.ImageBackground_418_9451}
            />
          </View>
          <View style={styles.View_418_9452}>
            <Text style={styles.Text_418_9452}>bags,clutches,hand bags</Text>
          </View>
          <View style={styles.View_685_447}>
            <View style={styles.View_685_448} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/127f/a6dd/0803f30495cb515442c3cfd55c0f71c9"
              }}
              style={styles.ImageBackground_685_449}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_685_451}>
        <View style={styles.View_685_452} />
        <View style={styles.View_685_453}>
          <View style={styles.View_685_454}>
            <View style={styles.View_685_455} />
            <View style={styles.View_685_456}>
              <View style={styles.View_685_457} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92da/3c94/78a982fb8701b0aa8a72b1e51cc01250"
                }}
                style={styles.ImageBackground_685_458}
              />
            </View>
          </View>
          <View style={styles.View_685_459}>
            <View style={styles.View_685_460}>
              <Text style={styles.Text_685_460}>Kids</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/662a/b069/f3eb6aa1b000864449bf87f586fccade"
              }}
              style={styles.ImageBackground_685_461}
            />
          </View>
          <View style={styles.View_685_462}>
            <Text style={styles.Text_685_462}>bags,clutches,hand bags</Text>
          </View>
          <View style={styles.View_685_463}>
            <View style={styles.View_685_464} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4a/a05d/9f9108deba059de9f423afca0048cee0"
              }}
              style={styles.ImageBackground_685_467}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_418_9456}>
        <View style={styles.View_418_9457} />
        <View style={styles.View_418_9458}>
          <View style={styles.View_418_9459} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92da/3c94/78a982fb8701b0aa8a72b1e51cc01250"
            }}
            style={styles.ImageBackground_418_9460}
          />
        </View>
        <View style={styles.View_418_9461}>
          <View style={styles.View_418_9462}>
            <Text style={styles.Text_418_9462}>Sandal</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/662a/b069/f3eb6aa1b000864449bf87f586fccade"
            }}
            style={styles.ImageBackground_418_9463}
          />
        </View>
        <View style={styles.View_418_9464}>
          <Text style={styles.Text_418_9464}>flat sandales,high heels</Text>
        </View>
        <View style={styles.View_418_9465}>
          <View style={styles.View_418_9466} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0347/adb5/4684f82c0e46adbfdca2c788f89ca118"
            }}
            style={styles.ImageBackground_418_9467}
          />
        </View>
      </View>
      <View style={styles.View_685_613}>
        <View style={styles.View_418_9468} />
        <View style={styles.View_418_9469}>
          <Text style={styles.Text_418_9469}>Category</Text>
        </View>
        <View style={styles.View_685_427}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57c1/2a9b/50cd3f18e1fe2fbb005628fb8e142f1d"
            }}
            style={styles.ImageBackground_I685_427_681_286}
          />
        </View>
      </View>
      <View style={styles.View_685_525}>
        <View style={styles.View_I685_525_681_24}>
          <View style={styles.View_I685_525_681_25} />
        </View>
        <View style={styles.View_I685_525_681_26}>
          <View style={styles.View_I685_525_681_27}>
            <View style={styles.View_I685_525_681_28} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I685_525_681_29}
            />
            <View style={styles.View_I685_525_681_30} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I685_525_681_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I685_525_681_35}
          />
        </View>
        <View style={styles.View_I685_525_681_40}>
          <View style={styles.View_I685_525_681_41}>
            <Text style={styles.Text_I685_525_681_41}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_685_450}>
        <View style={styles.View_418_9428}>
          <View style={styles.View_418_9429}>
            <View style={styles.View_418_9430}>
              <View style={styles.View_418_9431} />
              <View style={styles.View_418_9432}>
                <View style={styles.View_418_9433} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92da/3c94/78a982fb8701b0aa8a72b1e51cc01250"
                  }}
                  style={styles.ImageBackground_418_9434}
                />
              </View>
            </View>
            <View style={styles.View_418_9435}>
              <View style={styles.View_418_9436}>
                <Text style={styles.Text_418_9436}>Designers</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/662a/b069/f3eb6aa1b000864449bf87f586fccade"
                }}
                style={styles.ImageBackground_418_9437}
              />
            </View>
            <View style={styles.View_418_9438}>
              <Text style={styles.Text_418_9438}>Chanel,Mont Blanc</Text>
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b7cf/7456/430d630b743723f256cf1b72d75f7f24"
          }}
          style={styles.ImageBackground_418_9501}
        />
      </View>
      <View style={styles.View_685_393}>
        <View style={styles.View_I685_393_682_115}>
          <View style={styles.View_I685_393_682_116}>
            <View style={styles.View_I685_393_682_117} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/344d/6779/48b73303811be15a8924edd018ea6156"
            }}
            style={styles.ImageBackground_I685_393_682_118}
          />
        </View>
        <View style={styles.View_I685_393_682_225}>
          <View style={styles.View_I685_393_682_225_681_166} />
        </View>
        <View style={styles.View_I685_393_682_119}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ee/22ee/13807c8c84a7fbbcc02a451925a6a598"
            }}
            style={styles.ImageBackground_I685_393_682_119_681_290}
          />
        </View>
        <View style={styles.View_I685_393_682_120}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ed3/eba9/c51da2a0f9c4823e64067e2a45bf0acf"
            }}
            style={styles.ImageBackground_I685_393_682_120_681_277}
          />
        </View>
        <View style={styles.View_I685_393_682_121}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2126/c645/8108b190e87b203b796ce19e9b0825f5"
            }}
            style={styles.ImageBackground_I685_393_682_121_681_294}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2912/cbdf/d95026ae564db56c199ab74858d2109f"
          }}
          style={styles.ImageBackground_I685_393_682_122}
        />
        <View style={styles.View_I685_393_682_123}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b933/b7b5/51cf400e44010e125156f486b306f25d"
            }}
            style={styles.ImageBackground_I685_393_682_123_681_283}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b2/cf20/174c7df860c26ea7becfe8e7f5e8ef52"
          }}
          style={styles.ImageBackground_I685_393_682_124}
        />
        <View style={styles.View_I685_393_682_125}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d9/40fd/dbe1f0c1ce38584baf03fc34d6b4b7f9"
            }}
            style={styles.ImageBackground_I685_393_682_125_681_300}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_418_9416: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("35.79234972677596%")
  },
  View_418_9417: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9418: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9419: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(161, 180, 220, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_418_9420: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9421: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 243, 112, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_418_9422: {
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_418_9423: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("5.05464480874317%")
  },
  View_418_9424: {
    width: wp("12%"),
    minWidth: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_418_9424: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_418_9425: {
    width: wp("2.666666666666667%"),
    height: hp("0.6830603698563706%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666666%")
  },
  View_418_9426: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("9.972677595628411%")
  },
  Text_418_9426: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_437: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.06666666666667%"),
    top: hp("2.0491803278688465%")
  },
  View_685_438: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_685_439: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("15.163934426229508%"),
    minHeight: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_418_9441: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_418_9442: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 243, 112, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_418_9443: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9444: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9445: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(181, 184, 205, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_418_9446: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9447: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 243, 112, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_418_9448: {
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_418_9449: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("5.05464480874317%")
  },
  View_418_9450: {
    width: wp("20%"),
    minWidth: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_418_9450: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_418_9451: {
    width: wp("2.666666666666667%"),
    height: hp("0.6830603698563706%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%")
  },
  View_418_9452: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("9.972677595628419%")
  },
  Text_418_9452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_447: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("16.092338978918523%"),
    minHeight: hp("16.092338978918523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("1.1207789019808772%")
  },
  View_685_448: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("16.092338978918523%"),
    minHeight: hp("16.092338978918523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_685_449: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("16.092338978918523%"),
    minHeight: hp("16.092338978918523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_451: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_685_452: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(109, 104, 40, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_685_453: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_685_454: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_685_455: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(240, 205, 147, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_685_456: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_685_457: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 243, 112, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_685_458: {
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_685_459: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("5.054644808743163%")
  },
  View_685_460: {
    width: wp("11.466666666666667%"),
    minWidth: wp("11.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_685_460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_685_461: {
    width: wp("2.666666666666667%"),
    height: hp("0.6830603698563706%"),
    top: hp("2.0491803278688607%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.133333333333335%")
  },
  View_685_462: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("9.972677595628411%")
  },
  Text_685_462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_463: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("16.092338978918523%"),
    minHeight: hp("16.092338978918523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.99999999999999%"),
    top: hp("1.1207789019808772%")
  },
  View_685_464: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("16.092338978918523%"),
    minHeight: hp("16.092338978918523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_685_467: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("16.092338978918523%"),
    minHeight: hp("16.092338978918523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_418_9456: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("74.59016393442623%")
  },
  View_418_9457: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 184, 182, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_418_9458: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9459: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 243, 112, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_418_9460: {
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_418_9461: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("5.054644808743177%")
  },
  View_418_9462: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_418_9462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_418_9463: {
    width: wp("2.666666666666667%"),
    height: hp("0.6830603698563706%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%")
  },
  View_418_9464: {
    width: wp("37.6%"),
    minWidth: wp("37.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("9.972677595628411%")
  },
  Text_418_9464: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_418_9465: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.53333333333333%"),
    top: hp("0%")
  },
  View_418_9466: {
    flexGrow: 1,
    width: wp("46.93333333333333%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(216, 216, 216, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_418_9467: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_613: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9468: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14.207650273224044%"),
    minHeight: hp("14.207650273224044%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_418_9469: {
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.060109289617486%")
  },
  Text_418_9469: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_427: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_427_681_286: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%"),
    top: hp("0.27322404371584774%")
  },
  View_685_525: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_525_681_24: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I685_525_681_25: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_525_681_26: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I685_525_681_27: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288887532552081%"),
    top: hp("0.045559575648907114%")
  },
  View_I685_525_681_28: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I685_525_681_29: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("0.5008885117827866%")
  },
  View_I685_525_681_30: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333314%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I685_525_681_31: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("0.045159345116120075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%")
  },
  ImageBackground_I685_525_681_35: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_525_681_40: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000005%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I685_525_681_41: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896194%")
  },
  Text_I685_525_681_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_685_450: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("93.98907103825137%")
  },
  View_418_9428: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9429: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9430: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9431: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(182, 231, 209, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_418_9432: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_418_9433: {
    flexGrow: 1,
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 243, 112, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_418_9434: {
    width: wp("91.46666666666667%"),
    height: hp("17.21311475409836%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_418_9435: {
    width: wp("32.266666666666666%"),
    minWidth: wp("32.266666666666666%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("5.054644808743177%")
  },
  View_418_9436: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_418_9436: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_418_9437: {
    width: wp("2.666666666666667%"),
    height: hp("0.6830603698563706%"),
    top: hp("2.0491803278688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6%")
  },
  View_418_9438: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("9.972677595628426%")
  },
  Text_418_9438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_418_9501: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    height: hp("17.21311475409836%"),
    minHeight: hp("17.21311475409836%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666666%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_393: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("94.94535519125684%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_393_682_115: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311464%")
  },
  View_I685_393_682_116: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_393_682_117: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 156, 173, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_I685_393_682_118: {
    width: wp("30.933333333333334%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%")
  },
  View_I685_393_682_225: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207638%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_393_682_225_681_166: {
    flexGrow: 1,
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I685_393_682_119: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26666666666667%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_393_682_119_681_290: {
    flexGrow: 1,
    width: wp("4.039746348063151%"),
    height: hp("2.6260547950619557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.2732240437158566%")
  },
  View_I685_393_682_120: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.13333333333333%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_393_682_120_681_277: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.2732240437158566%")
  },
  View_I685_393_682_121: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.73333333333333%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_393_682_121_681_294: {
    flexGrow: 1,
    width: wp("4.933355204264323%"),
    height: hp("2.4725817591766193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.733306884765625%"),
    top: hp("0.4439890710382599%")
  },
  ImageBackground_I685_393_682_122: {
    flexGrow: 1,
    width: wp("2.9333335876464846%"),
    height: hp("0.7513663156436441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.000000000000004%"),
    top: hp("4.508196721311464%")
  },
  View_I685_393_682_123: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    top: hp("8.606557377049171%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_393_682_123_681_283: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I685_393_682_124: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("0%")
  },
  View_I685_393_682_125: {
    flexGrow: 1,
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.86666666666667%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_393_682_125_681_300: {
    flexGrow: 1,
    width: wp("6.577740478515624%"),
    height: hp("3.3696521175363676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9778368631998688%"),
    top: hp("0.5010219219603727%")
  },
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
