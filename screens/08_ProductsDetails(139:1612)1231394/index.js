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
      <View style={styles.View_690_510}>
        <View style={styles.View_139_1613} />
        <View style={styles.View_690_455}>
          <Text style={styles.Text_690_455}>4,900 SAR</Text>
        </View>
        <View style={styles.View_690_457}>
          <Text style={styles.Text_690_457}>
            Super Mini GG Marmont Bag in Matelassé Leather
          </Text>
        </View>
        <View style={styles.View_690_456}>
          <Text style={styles.Text_690_456}>Gucci</Text>
        </View>
        <View style={styles.View_690_509}>
          <View style={styles.View_690_508} />
          <View style={styles.View_690_507}>
            <Text style={styles.Text_690_507}>New Season</Text>
          </View>
        </View>
        <View style={styles.View_690_458}>
          <Text style={styles.Text_690_458}>Including VAT</Text>
        </View>
      </View>
      <View style={styles.View_700_403}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4804/f608/732dbbe01758d27149aba4fa7d920e96"
          }}
          style={styles.ImageBackground_139_1614}
        />
        <View style={styles.View_139_1615} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa16/3e48/5ec1a4152b101226f67a05b83342e130"
          }}
          style={styles.ImageBackground_690_443}
        />
      </View>
      <View style={styles.View_690_516}>
        <View style={styles.View_I690_516_681_179} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3c8/46e8/081264ac96158ab029bd2b5e4323a634"
          }}
          style={styles.ImageBackground_I690_516_685_605}
        />
      </View>
      <View style={styles.View_690_520}>
        <View style={styles.View_I690_520_681_24}>
          <View style={styles.View_I690_520_681_25} />
        </View>
        <View style={styles.View_I690_520_681_26}>
          <View style={styles.View_I690_520_681_27}>
            <View style={styles.View_I690_520_681_28} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
              }}
              style={styles.ImageBackground_I690_520_681_29}
            />
            <View style={styles.View_I690_520_681_30} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
            }}
            style={styles.ImageBackground_I690_520_681_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
            }}
            style={styles.ImageBackground_I690_520_681_35}
          />
        </View>
        <View style={styles.View_I690_520_681_40}>
          <View style={styles.View_I690_520_681_41}>
            <Text style={styles.Text_I690_520_681_41}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_690_478}>
        <View style={styles.View_690_479} />
        <View style={styles.View_690_480}>
          <View style={styles.View_690_481}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c19e/9695/c106f21e070eb4f80f592822fb9094df"
              }}
              style={styles.ImageBackground_690_482}
            />
            <View style={styles.View_690_483}>
              <Text style={styles.Text_690_483}>
                Ribbed Twist Flared Dress{" "}
              </Text>
            </View>
            <View style={styles.View_690_484}>
              <Text style={styles.Text_690_484}>2,500 SAR</Text>
            </View>
            <View style={styles.View_690_485}>
              <Text style={styles.Text_690_485}>Dion Lee</Text>
            </View>
            <View style={styles.View_690_486}>
              <Text style={styles.Text_690_486}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_690_487}>
          <View style={styles.View_690_488}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4cf/b6d2/ef86a31bf022219a086b18e9e314eaa7"
              }}
              style={styles.ImageBackground_690_489}
            />
            <View style={styles.View_690_490}>
              <Text style={styles.Text_690_490}>
                Ribbed Twist Flared Dress{" "}
              </Text>
            </View>
            <View style={styles.View_690_491}>
              <Text style={styles.Text_690_491}>2,500 SAR</Text>
            </View>
            <View style={styles.View_690_492}>
              <Text style={styles.Text_690_492}>Dion Lee</Text>
            </View>
            <View style={styles.View_690_493}>
              <Text style={styles.Text_690_493}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_690_494}>
          <Text style={styles.Text_690_494}>You May Also Like</Text>
        </View>
        <View style={styles.View_690_495}>
          <Text style={styles.Text_690_495}>See all </Text>
        </View>
      </View>
      <View style={styles.View_690_550}>
        <View style={styles.View_139_1670} />
        <View style={styles.View_139_1671}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09b5/3763/88b8ac9ed5a18a0d95f4e6cda37461d0"
            }}
            style={styles.ImageBackground_139_1672}
          />
          <View style={styles.View_139_1674}>
            <Text style={styles.Text_139_1674}>Editor’s Advice</Text>
          </View>
          <View style={styles.View_139_1676}>
            <Text style={styles.Text_139_1676}>Size &amp; Fit</Text>
          </View>
          <View style={styles.View_139_1677}>
            <Text style={styles.Text_139_1677}>Design Details</Text>
          </View>
          <View style={styles.View_690_459}>
            <Text style={styles.Text_690_459}>About the brand</Text>
          </View>
        </View>
        <View style={styles.View_139_1680}>
          <Text style={styles.Text_139_1680}>
            Inspired by an archival design from the 1970s, this super mini edit
            of Gucci&#39;s Marmont Bag brings a summery touch to casual
            ensembles. Made in Italy from matelassé leather, the structured
            design is defined by quilted chevron with a heart detail at the
            back. Style the bag as a crossbody using the detachable chain or
            carry it as a clutch.
          </Text>
        </View>
        <View style={styles.View_142_24} />
      </View>
      <View style={styles.View_690_539}>
        <View style={styles.View_690_540} />
        <View style={styles.View_690_549}>
          <Text style={styles.Text_690_549}>Colours</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2988/6359/155790d3c01de2a281acebe9a8d7c11f"
          }}
          style={styles.ImageBackground_690_557}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/276f/c7dc/fd9b23b07c01b5fd4f016e427b633047"
          }}
          style={styles.ImageBackground_690_558}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fc6/9e8b/e6c0dee73cae46c4992f52b5f1a3d3f0"
          }}
          style={styles.ImageBackground_690_559}
        />
      </View>
      <View style={styles.View_690_617}>
        <View style={styles.View_690_618}>
          <View style={styles.View_690_619} />
          <View style={styles.View_690_620} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3884/4a88/a9e9e346af297ba0a5d066ca6e99b291"
            }}
            style={styles.ImageBackground_690_621}
          />
        </View>
        <View style={styles.View_690_622}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/790b/07a3/228f26bfa4aa506b5c573328e9f291bd"
            }}
            style={styles.ImageBackground_690_623}
          />
          <View style={styles.View_690_642}>
            <Text style={styles.Text_690_642}>truck</Text>
          </View>
        </View>
        <View style={styles.View_690_639}>
          <View style={styles.View_690_640}>
            <Text style={styles.Text_690_640}>Delivery to Riyadh</Text>
          </View>
          <View style={styles.View_690_641}>
            <Text style={styles.Text_690_641}>1-6 working days</Text>
          </View>
          <View style={styles.View_690_643}>
            <Text style={styles.Text_690_643}>Change</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_690_561}>
        <View style={styles.View_690_562} />
        <View style={styles.View_690_563}>
          <Text style={styles.Text_690_563}>Availability</Text>
        </View>
        <View style={styles.View_690_569}>
          <Text style={styles.Text_690_569}>
            Verified and authenticated by our expert seller
          </Text>
        </View>
        <View style={styles.View_690_571}>
          <Text style={styles.Text_690_571}>
            Item will be shipped in 1-2 business days
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab09/ce88/88e2757fe80eab17f51bc3584b720786"
          }}
          style={styles.ImageBackground_690_572}
        />
        <View style={styles.View_690_579}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e157/f7a8/e916f11d7ed86c4c6ea64f380fdfbd8e"
            }}
            style={styles.ImageBackground_690_580}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fdc/f907/a887577f8da48dc28ef5c00594ab41d6"
            }}
            style={styles.ImageBackground_690_584}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/604b/ccb3/30ffc902c432d5c7938170fa53c1b914"
            }}
            style={styles.ImageBackground_690_585}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54fb/9fbc/6b107ead8081b8fd2a2f7e3a32e1601c"
            }}
            style={styles.ImageBackground_690_586}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e5/a40e/0bfa3c30b62059968271a9cd19e2f855"
            }}
            style={styles.ImageBackground_690_587}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc5/062b/bbd220ee312121fd119c377bb40ff335"
            }}
            style={styles.ImageBackground_690_588}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8107/91d9/278d8e798b2bdc5cdf82e81e346b6213"
            }}
            style={styles.ImageBackground_690_589}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e5/a40e/0bfa3c30b62059968271a9cd19e2f855"
            }}
            style={styles.ImageBackground_690_590}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4dc5/062b/bbd220ee312121fd119c377bb40ff335"
            }}
            style={styles.ImageBackground_690_591}
          />
        </View>
      </View>
      <View style={styles.View_690_448}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3fb/f1b9/d954066de431d8e1fde0a6bc8e7df6d6"
          }}
          style={styles.ImageBackground_I690_448_681_294}
        />
      </View>
      <View style={styles.View_690_644}>
        <View style={styles.View_690_645} />
        <View style={styles.View_690_646}>
          <View style={styles.View_690_647} />
          <View style={styles.View_690_648}>
            <Text style={styles.Text_690_648}>Add to Bag</Text>
          </View>
        </View>
        <View style={styles.View_690_649}>
          <View style={styles.View_690_650} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d99/936a/fc479a8975c7852277280e2cf410c1cb"
            }}
            style={styles.ImageBackground_690_652}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_690_510: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("58.7431693989071%")
  },
  View_139_1613: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21.03825136612022%"),
    minHeight: hp("21.03825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_690_455: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("12.02185792349728%")
  },
  Text_690_455: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_457: {
    width: wp("71.46666666666667%"),
    minWidth: wp("71.46666666666667%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.918032786885256%")
  },
  Text_690_457: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_456: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726782%")
  },
  Text_690_456: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_509: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%"),
    top: hp("1.775956284153004%")
  },
  View_690_508: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_690_507: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333428%"),
    top: hp("0.2732240437158495%")
  },
  Text_690_507: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_458: {
    width: wp("19.733333333333334%"),
    minWidth: wp("19.733333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("16.939890710382514%")
  },
  Text_690_458: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_700_403: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58.7431693989071%"),
    minHeight: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_139_1614: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58.7431693989071%"),
    minHeight: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_139_1615: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("58.7431693989071%"),
    minHeight: hp("58.7431693989071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_690_443: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("56.284153005464475%")
  },
  View_690_516: {
    width: wp("6.4%"),
    height: hp("3.1606246864860825%"),
    top: hp("7.506457052595629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I690_516_681_179: {
    flexGrow: 1,
    width: wp("6.4%"),
    height: hp("3.1606246864860825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_I690_516_685_605: {
    flexGrow: 1,
    width: wp("4.266666666666667%"),
    height: hp("1.3169269092747422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666664%"),
    top: hp("0.8560264045423489%")
  },
  View_690_520: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.794478765602321%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I690_520_681_24: {
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
  View_I690_520_681_25: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I690_520_681_26: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.31110026041667%"),
    top: hp("2.185792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I690_520_681_27: {
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
  View_I690_520_681_28: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I690_520_681_29: {
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
  View_I690_520_681_30: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I690_520_681_31: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("0.045159345116120075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873893229166669%")
  },
  ImageBackground_I690_520_681_35: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I690_520_681_40: {
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
  View_I690_520_681_41: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896194%")
  },
  Text_I690_520_681_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_690_478: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("165.5737704918033%")
  },
  View_690_479: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_690_480: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.650273224043701%")
  },
  View_690_481: {
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
  ImageBackground_690_482: {
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
  View_690_483: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_690_483: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_484: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163934%")
  },
  Text_690_484: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_485: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606575%")
  },
  Text_690_485: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_486: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792547%")
  },
  Text_690_486: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_487: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("7.650273224043701%")
  },
  View_690_488: {
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
  ImageBackground_690_489: {
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
  View_690_490: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_690_490: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_491: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163934%")
  },
  Text_690_491: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_492: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606575%")
  },
  Text_690_492: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_493: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792547%")
  },
  Text_690_493: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_494: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_690_494: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_495: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("2.732240437158481%")
  },
  Text_690_495: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_550: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("133.46994535519124%")
  },
  View_139_1670: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("30.46448087431694%"),
    minHeight: hp("30.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_139_1671: {
    width: wp("115.46666666666667%"),
    minWidth: wp("115.46666666666667%"),
    height: hp("4.2349726775956285%"),
    minHeight: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%")
  },
  ImageBackground_139_1672: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%")
  },
  View_139_1674: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("0%")
  },
  Text_139_1674: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.018416650593280792,
    textTransform: "none"
  },
  View_139_1676: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53333333333333%"),
    top: hp("0%")
  },
  Text_139_1676: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.018416650593280792,
    textTransform: "none"
  },
  View_139_1677: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.93333333333334%"),
    top: hp("0%")
  },
  Text_139_1677: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.018416650593280792,
    textTransform: "none"
  },
  View_690_459: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.60000000000001%"),
    top: hp("0%")
  },
  Text_690_459: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.018416650593280792,
    textTransform: "none"
  },
  View_139_1680: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("19.12568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("9.153005464480884%")
  },
  Text_139_1680: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_142_24: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    height: hp("0.3460837843639603%"),
    minHeight: hp("0.3460837843639603%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.55737704918036%"),
    backgroundColor: "rgba(184, 114, 83, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_690_539: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("81.4207650273224%")
  },
  View_690_540: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19.94535519125683%"),
    minHeight: hp("19.94535519125683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_690_549: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726782%")
  },
  Text_690_549: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_690_557: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("6.830601092896174%"),
    resizeMode: "cover"
  },
  ImageBackground_690_558: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.333333333333336%"),
    top: hp("6.830601092896174%"),
    resizeMode: "cover",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_690_559: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    top: hp("6.830601092896174%"),
    resizeMode: "cover"
  },
  View_690_617: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("103.00546448087431%")
  },
  View_690_618: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_690_619: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_690_620: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_690_621: {
    width: wp("2.190625%"),
    minWidth: wp("2.190625%"),
    height: hp("1.0261910860655739%"),
    minHeight: hp("1.0261910860655739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.66666666666666%"),
    top: hp("4.918032786885249%")
  },
  View_690_622: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.4590163934426386%")
  },
  ImageBackground_690_623: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_690_642: {
    width: wp("6.133333333333333%"),
    minWidth: wp("6.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("1.5492256873292263%")
  },
  Text_690_642: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_639: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.266666666666666%"),
    top: hp("2.8688524590164093%")
  },
  View_690_640: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_690_640: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_641: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.45901639344261%")
  },
  Text_690_641: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_643: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("1.2295081967213122%")
  },
  Text_690_643: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_561: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115.1639344262295%")
  },
  View_690_562: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_690_563: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267677%")
  },
  Text_690_563: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_569: {
    width: wp("73.6%"),
    minWidth: wp("73.6%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("7.786885245901644%")
  },
  Text_690_569: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_571: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("11.612021857923509%")
  },
  Text_690_571: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_690_572: {
    width: wp("4.186666615804036%"),
    minWidth: wp("4.186666615804036%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("7.6502732240437155%")
  },
  View_690_579: {
    width: wp("5.688848368326823%"),
    minWidth: wp("5.688848368326823%"),
    height: hp("1.6393450439953414%"),
    minHeight: hp("1.6393450439953414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("11.885245901639351%")
  },
  ImageBackground_690_580: {
    width: wp("1.422222900390625%"),
    minWidth: wp("1.422222900390625%"),
    height: hp("0.9107441198630412%"),
    minHeight: hp("0.9107441198630412%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1821715975068372%")
  },
  ImageBackground_690_584: {
    width: wp("2.1333343505859377%"),
    minWidth: wp("2.1333343505859377%"),
    height: hp("1.0928966959968942%"),
    minHeight: hp("1.0928966959968942%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5555175781249995%"),
    top: hp("0.36427648992487605%")
  },
  ImageBackground_690_585: {
    width: wp("1.0371560414632162%"),
    minWidth: wp("1.0371560414632162%"),
    height: hp("0.36429886609478723%"),
    minHeight: hp("0.36429886609478723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0.5464480874316848%")
  },
  ImageBackground_690_586: {
    width: wp("2.8444455464680987%"),
    minWidth: wp("2.8444455464680987%"),
    height: hp("1.457195464379149%"),
    minHeight: hp("1.457195464379149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("0%")
  },
  ImageBackground_690_587: {
    width: wp("0.7111113866170247%"),
    minWidth: wp("0.7111113866170247%"),
    height: hp("0.36429886609478723%"),
    minHeight: hp("0.36429886609478723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.444449869791668%"),
    top: hp("1.183948621072389%")
  },
  ImageBackground_690_588: {
    width: wp("1.0666671752929688%"),
    minWidth: wp("1.0666671752929688%"),
    height: hp("0.5464483479984471%"),
    minHeight: hp("0.5464483479984471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_690_589: {
    width: wp("2.8444455464680987%"),
    minWidth: wp("2.8444455464680987%"),
    height: hp("0.36429886609478723%"),
    minHeight: hp("0.36429886609478723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("1.0928961748633839%")
  },
  ImageBackground_690_590: {
    width: wp("0.7111113866170247%"),
    minWidth: wp("0.7111113866170247%"),
    height: hp("0.36429886609478723%"),
    minHeight: hp("0.36429886609478723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9555175781249998%"),
    top: hp("1.183948621072389%")
  },
  ImageBackground_690_591: {
    width: wp("1.0666671752929688%"),
    minWidth: wp("1.0666671752929688%"),
    height: hp("0.5464483479984471%"),
    minHeight: hp("0.5464483479984471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7777343749999996%"),
    top: hp("1.0928961748633839%")
  },
  View_690_448: {
    width: wp("6.4%"),
    height: hp("3.1606246864860825%"),
    top: hp("7.506457052595629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.26666666666667%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I690_448_681_294: {
    flexGrow: 1,
    width: wp("4.933354695638021%"),
    height: hp("2.383545317936465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7333007812499943%"),
    top: hp("0.42797984972677483%")
  },
  View_690_644: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.72677595628416%")
  },
  View_690_645: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_690_646: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666666%"),
    top: hp("2.1857923497267677%")
  },
  View_690_647: {
    width: wp("73.86666666666667%"),
    minWidth: wp("73.86666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(184, 114, 83, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_690_648: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.666666666666668%"),
    top: hp("2.049180327868868%")
  },
  Text_690_648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_690_649: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: hp("2.1857923497267677%")
  },
  View_690_650: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(221, 221, 221, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_690_652: {
    width: wp("5.8725830078125%"),
    minWidth: wp("5.8725830078125%"),
    height: hp("2.6270905479055937%"),
    minHeight: hp("2.6270905479055937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7246419270833333%"),
    top: hp("2.068925034153011%")
  },
  View_2: { height: 1633 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
