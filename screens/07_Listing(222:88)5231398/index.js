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
      <View style={styles.View_700_404}>
        <View style={styles.View_222_89} />
        <View style={styles.View_685_513}>
          <View style={styles.View_I685_513_681_179} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f53/e64a/0a7afbdb593dda3fae78de2baf398788"
            }}
            style={styles.ImageBackground_I685_513_685_605}
          />
        </View>
        <View style={styles.View_685_516}>
          <Text style={styles.Text_685_516}>Women</Text>
        </View>
        <View style={styles.View_685_518}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6727/2885/828ac497a9d2fb8288e6f090e66b001f"
            }}
            style={styles.ImageBackground_I685_518_681_273}
          />
        </View>
      </View>
      <View style={styles.View_685_544}>
        <View style={styles.View_I685_544_681_24}>
          <View style={styles.View_I685_544_681_25} />
        </View>
        <View style={styles.View_I685_544_681_26}>
          <View style={styles.View_I685_544_681_27}>
            <View style={styles.View_I685_544_681_28} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I685_544_681_29}
            />
            <View style={styles.View_I685_544_681_30} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I685_544_681_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I685_544_681_35}
          />
        </View>
        <View style={styles.View_I685_544_681_40}>
          <View style={styles.View_I685_544_681_41}>
            <Text style={styles.Text_I685_544_681_41}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_222_118}>
        <Text style={styles.Text_222_118}>Sneaker</Text>
      </View>
      <View style={styles.View_685_468}>
        <View style={styles.View_685_469}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af89/76aa/581cbfdad09571d4185af11fd615a933"
            }}
            style={styles.ImageBackground_685_470}
          />
          <View style={styles.View_685_471}>
            <Text style={styles.Text_685_471}>Ribbed Twist Flared Dress </Text>
          </View>
          <View style={styles.View_685_472}>
            <Text style={styles.Text_685_472}>2,500 SAR</Text>
          </View>
          <View style={styles.View_685_473}>
            <Text style={styles.Text_685_473}>Dion Lee</Text>
          </View>
          <View style={styles.View_685_474}>
            <Text style={styles.Text_685_474}>heart</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_685_482}>
        <View style={styles.View_685_483}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c19e/9695/c106f21e070eb4f80f592822fb9094df"
            }}
            style={styles.ImageBackground_685_484}
          />
          <View style={styles.View_685_485}>
            <Text style={styles.Text_685_485}>Ribbed Twist Flared Dress </Text>
          </View>
          <View style={styles.View_685_486}>
            <Text style={styles.Text_685_486}>2,500 SAR</Text>
          </View>
          <View style={styles.View_685_487}>
            <Text style={styles.Text_685_487}>Dion Lee</Text>
          </View>
          <View style={styles.View_685_488}>
            <Text style={styles.Text_685_488}>heart</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_685_496}>
        <View style={styles.View_685_497}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0913/a9e2/44c3d46a3914d9411b6e34878f00aa69"
            }}
            style={styles.ImageBackground_685_498}
          />
          <View style={styles.View_685_499}>
            <Text style={styles.Text_685_499}>Ribbed Twist Flared Dress </Text>
          </View>
          <View style={styles.View_685_500}>
            <Text style={styles.Text_685_500}>2,500 SAR</Text>
          </View>
          <View style={styles.View_685_501}>
            <Text style={styles.Text_685_501}>Dion Lee</Text>
          </View>
          <View style={styles.View_685_502}>
            <Text style={styles.Text_685_502}>heart</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_685_503}>
        <View style={styles.View_685_504}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deaa/8a42/8b1d16d31482a6ca0a5cf4d3348a3bf2"
            }}
            style={styles.ImageBackground_685_505}
          />
          <View style={styles.View_685_506}>
            <Text style={styles.Text_685_506}>Ribbed Twist Flared Dress </Text>
          </View>
          <View style={styles.View_685_507}>
            <Text style={styles.Text_685_507}>2,500 SAR</Text>
          </View>
          <View style={styles.View_685_508}>
            <Text style={styles.Text_685_508}>Dion Lee</Text>
          </View>
          <View style={styles.View_685_509}>
            <Text style={styles.Text_685_509}>heart</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_685_489}>
        <View style={styles.View_685_490}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4cf/b6d2/ef86a31bf022219a086b18e9e314eaa7"
            }}
            style={styles.ImageBackground_685_491}
          />
          <View style={styles.View_685_492}>
            <Text style={styles.Text_685_492}>Ribbed Twist Flared Dress </Text>
          </View>
          <View style={styles.View_685_493}>
            <Text style={styles.Text_685_493}>2,500 SAR</Text>
          </View>
          <View style={styles.View_685_494}>
            <Text style={styles.Text_685_494}>Dion Lee</Text>
          </View>
          <View style={styles.View_685_495}>
            <Text style={styles.Text_685_495}>heart</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_685_475}>
        <View style={styles.View_685_476}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5b7/c1b7/7418fe11e81f3c217b0d91724dd65744"
            }}
            style={styles.ImageBackground_685_477}
          />
          <View style={styles.View_685_478}>
            <Text style={styles.Text_685_478}>Ribbed Twist Flared Dress </Text>
          </View>
          <View style={styles.View_685_479}>
            <Text style={styles.Text_685_479}>2,500 SAR</Text>
          </View>
          <View style={styles.View_685_480}>
            <Text style={styles.Text_685_480}>Dion Lee</Text>
          </View>
          <View style={styles.View_685_481}>
            <Text style={styles.Text_685_481}>heart</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_685_601}>
        <View style={styles.View_685_588} />
        <View style={styles.View_685_602} />
        <View style={styles.View_685_589}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f036/7931/81a0d4619ca5c16676198f21c13cc5e4"
            }}
            style={styles.ImageBackground_I685_589_685_564}
          />
        </View>
        <View style={styles.View_685_590}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f049/1ae7/3cbacbd2979454a02e51b84a8b33aa33"
            }}
            style={styles.ImageBackground_I685_590_685_570}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_700_404: {
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
  View_222_89: {
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
  View_685_513: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.333333333333332%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_513_681_179: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I685_513_685_605: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("0.8879781420765038%")
  },
  View_685_516: {
    width: wp("18.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.866666666666665%"),
    top: hp("7.786885245901639%")
  },
  Text_685_516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_518: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_518_681_273: {
    flexGrow: 1,
    width: wp("5.003813680013021%"),
    height: hp("2.6259521317612275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7408040364583286%"),
    top: hp("0.3794852501707666%")
  },
  View_685_544: {
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
  View_I685_544_681_24: {
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
  View_I685_544_681_25: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_544_681_26: {
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
  View_I685_544_681_27: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288883463541666%"),
    top: hp("0.045559575648907114%")
  },
  View_I685_544_681_28: {
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
  ImageBackground_I685_544_681_29: {
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
  View_I685_544_681_30: {
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
  ImageBackground_I685_544_681_31: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("0.045159345116120075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873876953125006%")
  },
  ImageBackground_I685_544_681_35: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_544_681_40: {
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
  View_I685_544_681_41: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896194%")
  },
  Text_I685_544_681_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_222_118: {
    width: wp("16.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("20.081967213114755%")
  },
  Text_222_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_468: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("16.256830601092894%")
  },
  View_685_469: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_685_470: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_471: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_685_471: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_472: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.885245901639344%")
  },
  Text_685_472: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_473: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_685_473: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_474: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.366120218579237%")
  },
  Text_685_474: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_482: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.92349726775956%")
  },
  View_685_483: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_685_484: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_485: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_685_485: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_486: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163935%")
  },
  Text_685_486: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_487: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_685_487: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_488: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792405%")
  },
  Text_685_488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_496: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("99.59016393442623%")
  },
  View_685_497: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_685_498: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_499: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076501%")
  },
  Text_685_499: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_500: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163932%")
  },
  Text_685_500: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_501: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_685_501: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_502: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792263%")
  },
  Text_685_502: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_503: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("99.59016393442623%")
  },
  View_685_504: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_685_505: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_506: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076501%")
  },
  Text_685_506: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_507: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163932%")
  },
  Text_685_507: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_508: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_685_508: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_509: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792263%")
  },
  Text_685_509: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_489: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("57.92349726775956%")
  },
  View_685_490: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_685_491: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_492: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_685_492: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_493: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163935%")
  },
  Text_685_493: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_494: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_685_494: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_495: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792405%")
  },
  Text_685_495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_475: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("16.256830601092894%")
  },
  View_685_476: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_685_477: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("30.05464480874317%"),
    minHeight: hp("30.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_685_478: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_685_478: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_479: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.885245901639344%")
  },
  Text_685_479: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_480: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_685_480: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_481: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.366120218579237%")
  },
  Text_685_481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_601: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.93333333333333%"),
    top: hp("101.63934426229508%")
  },
  View_685_588: {
    width: wp("32.800000000000004%"),
    minWidth: wp("32.800000000000004%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 114, 83, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_685_602: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666673%"),
    top: hp("0%"),
    backgroundColor: "rgba(154, 83, 52, 1)"
  },
  View_685_589: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_589_685_564: {
    flexGrow: 1,
    width: wp("5.224202473958333%"),
    height: hp("2.417142273949795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8185546874999972%"),
    top: hp("0.567193370047832%")
  },
  View_685_590: {
    width: wp("6.933333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.5333333333333385%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I685_590_685_570: {
    flexGrow: 1,
    width: wp("5.268007914225261%"),
    height: hp("2.5876376146827242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8327473958333229%"),
    top: hp("0.5005549863388126%")
  },
  View_2: { height: 987 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
