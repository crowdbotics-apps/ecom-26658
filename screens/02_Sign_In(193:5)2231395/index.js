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
      <View style={styles.View_681_43}>
        <View style={styles.View_I681_43_681_24}>
          <View style={styles.View_I681_43_681_25} />
        </View>
        <View style={styles.View_I681_43_681_26}>
          <View style={styles.View_I681_43_681_27}>
            <View style={styles.View_I681_43_681_28} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I681_43_681_29}
            />
            <View style={styles.View_I681_43_681_30} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I681_43_681_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I681_43_681_35}
          />
        </View>
        <View style={styles.View_I681_43_681_40}>
          <View style={styles.View_I681_43_681_41}>
            <Text style={styles.Text_I681_43_681_41}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_193_33}>
        <View style={styles.View_193_34} />
        <View style={styles.View_193_35}>
          <Text style={styles.Text_193_35}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98a7/974b/9df55d764db934bcf501b5647f8b6204"
          }}
          style={styles.ImageBackground_193_36}
        />
        <View style={styles.View_193_39} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a182/83e5/6b61c4119ce5a84d37f7ccaafc85abbd"
          }}
          style={styles.ImageBackground_193_40}
        />
      </View>
      <View style={styles.View_193_48}>
        <View style={styles.View_193_49} />
        <View style={styles.View_193_50}>
          <Text style={styles.Text_193_50}>Email</Text>
        </View>
        <View style={styles.View_193_51}>
          <Text style={styles.Text_193_51}>akshaysyal123@gmail.com</Text>
        </View>
      </View>
      <View style={styles.View_193_52}>
        <View style={styles.View_193_53}>
          <View style={styles.View_193_54}>
            <Text style={styles.Text_193_54}>
              want to shopping with us please login to Ounass store
            </Text>
          </View>
          <View style={styles.View_193_55}>
            <Text style={styles.Text_193_55}>Welcome to Ounass</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_681_182}>
        <View style={styles.View_193_56} />
        <View style={styles.View_193_57}>
          <Text style={styles.Text_193_57}>SIGN IN</Text>
        </View>
      </View>
      <View style={styles.View_681_192}>
        <View style={styles.View_193_58}>
          <Text style={styles.Text_193_58}>Or connect with</Text>
        </View>
        <View style={styles.View_193_59} />
        <View style={styles.View_193_60} />
      </View>
      <View style={styles.View_193_61}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/08a0/d8c3/815b41dc7ed4366b53de3e662810fc86"
          }}
          style={styles.ImageBackground_193_62}
        />
        <View style={styles.View_193_64}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b4c/a260/e27b27707357e21885f0b591632daebf"
            }}
            style={styles.ImageBackground_193_65}
          />
        </View>
      </View>
      <View style={styles.View_193_67}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2312/d196/129d13f7cf82b08d55da8fe9153df102"
          }}
          style={styles.ImageBackground_193_68}
        />
        <View style={styles.View_193_70}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a5/6029/b0241ba0fd0d0479fb580300e48d8e3a"
            }}
            style={styles.ImageBackground_193_71}
          />
        </View>
      </View>
      <View style={styles.View_193_76}>
        <Text style={styles.Text_193_76}>Forgot password?</Text>
      </View>
      <View style={styles.View_418_83}>
        <Text style={styles.Text_418_83}>Don’t have an account? Signup</Text>
      </View>
      <View style={styles.View_681_193}>
        <View style={styles.View_I681_193_681_166} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_681_43: {
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
  View_I681_43_681_24: {
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
  View_I681_43_681_25: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I681_43_681_26: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("2.3224043715846996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I681_43_681_27: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288899739583343%"),
    top: hp("0.045559575648907114%")
  },
  View_I681_43_681_28: {
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
  ImageBackground_I681_43_681_29: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.5008885117827866%")
  },
  View_I681_43_681_30: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I681_43_681_31: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("0.045159345116120075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%")
  },
  ImageBackground_I681_43_681_35: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I681_43_681_40: {
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
  View_I681_43_681_41: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896194%")
  },
  Text_I681_43_681_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_193_33: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("52.732240437158474%")
  },
  View_193_34: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.655737704918032%"),
    backgroundColor: "rgba(255, 156, 173, 1)",
    borderColor: "rgba(184, 114, 83, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23
  },
  View_193_35: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_193_35: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_193_36: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("5.191256830601084%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.4%")
  },
  View_193_39: {
    width: wp("0.5333333333333333%"),
    minWidth: wp("0.5333333333333333%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.46666666666667%"),
    top: hp("5.191256830601084%"),
    backgroundColor: "rgba(184, 114, 83, 1)"
  },
  ImageBackground_193_40: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("6.284153005464475%")
  },
  View_193_48: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("10.792349726775956%"),
    minHeight: hp("10.792349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("38.3879781420765%")
  },
  View_193_49: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.655737704918039%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(221, 221, 221, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22
  },
  View_193_50: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_193_50: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_51: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("5.191256830601098%")
  },
  Text_193_51: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_52: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.89617486338798%")
  },
  View_193_53: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_193_54: {
    width: wp("71.73333333333333%"),
    minWidth: wp("71.73333333333333%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666666%"),
    top: hp("6.2841530054644785%")
  },
  Text_193_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_55: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_193_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_681_182: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("71.03825136612022%")
  },
  View_193_56: {
    width: wp("91.46666666666667%"),
    height: hp("7.103825136612022%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(184, 114, 83, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_193_57: {
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.13333333333333%"),
    top: hp("2.185792349726782%")
  },
  Text_193_57: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_681_192: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("83.60655737704919%")
  },
  View_193_58: {
    width: wp("28.799999999999997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("0%")
  },
  Text_193_58: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_193_59: {
    width: wp("27.200000000000003%"),
    minWidth: wp("27.200000000000003%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_193_60: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.53333333333333%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_193_61: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%")
  },
  ImageBackground_193_62: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_64: {
    width: wp("3.441066741943359%"),
    height: hp("3.3948322462905303%"),
    top: hp("2.0491803278688394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.599999999999994%")
  },
  ImageBackground_193_65: {
    width: wp("3.441066741943359%"),
    height: hp("3.3948322462905303%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_67: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("89.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%")
  },
  ImageBackground_193_68: {
    width: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_70: {
    width: wp("6.514832560221354%"),
    height: hp("3.4045881260939637%"),
    top: hp("2.114884840334696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_193_71: {
    width: wp("6.514832560221354%"),
    height: hp("3.4045881260939637%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_193_76: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65.33333333333333%"),
    top: hp("65.7103825136612%")
  },
  Text_193_76: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_418_83: {
    width: wp("58.4%"),
    minWidth: wp("58.4%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.8%"),
    top: hp("102.86885245901641%")
  },
  Text_418_83: {
    color: "rgba(24, 23, 37, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.7000000000000001,
    textTransform: "none"
  },
  View_681_193: {
    width: wp("100%"),
    height: hp("4.644808743169399%"),
    top: hp("106.28415300546447%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I681_193_681_166: {
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
  View_2: { height: 812 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
