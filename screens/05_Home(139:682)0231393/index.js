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
      <View style={styles.View_683_43}>
        <View style={styles.View_139_683} />
        <View style={styles.View_420_907}>
          <View style={styles.View_420_908}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af89/76aa/581cbfdad09571d4185af11fd615a933"
              }}
              style={styles.ImageBackground_420_909}
            />
            <View style={styles.View_420_943}>
              <Text style={styles.Text_420_943}>
                Ribbed Twist Flared Dress{" "}
              </Text>
            </View>
            <View style={styles.View_420_947}>
              <Text style={styles.Text_420_947}>2,500 SAR</Text>
            </View>
            <View style={styles.View_420_948}>
              <Text style={styles.Text_420_948}>Dion Lee</Text>
            </View>
            <View style={styles.View_420_949}>
              <Text style={styles.Text_420_949}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_683_35}>
          <View style={styles.View_683_36}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5b7/c1b7/7418fe11e81f3c217b0d91724dd65744"
              }}
              style={styles.ImageBackground_683_37}
            />
            <View style={styles.View_683_38}>
              <Text style={styles.Text_683_38}>Ribbed Twist Flared Dress </Text>
            </View>
            <View style={styles.View_683_39}>
              <Text style={styles.Text_683_39}>2,500 SAR</Text>
            </View>
            <View style={styles.View_683_40}>
              <Text style={styles.Text_683_40}>Dion Lee</Text>
            </View>
            <View style={styles.View_683_41}>
              <Text style={styles.Text_683_41}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_139_796}>
          <Text style={styles.Text_139_796}>Recommended For You</Text>
        </View>
        <View style={styles.View_683_42}>
          <Text style={styles.Text_683_42}>See all </Text>
        </View>
      </View>
      <View style={styles.View_683_144}>
        <View style={styles.View_683_145} />
        <View style={styles.View_683_146}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e02a/8a82/f8bb5cc777ab49b4dc30a278b18a2380"
            }}
            style={styles.ImageBackground_683_147}
          />
          <View style={styles.View_683_149}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb68/0218/04f039ce12354199a45d7658afaa687b"
              }}
              style={styles.ImageBackground_683_150}
            />
            <View style={styles.View_683_151}>
              <View style={styles.View_683_152}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b84/2ea2/b491978ddc2ede1c93e5660aab2ff0cf"
                  }}
                  style={styles.ImageBackground_683_153}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ac0/6e17/ca3ae93da426badaeb4b62cd3799927b"
                  }}
                  style={styles.ImageBackground_683_155}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97a3/04a0/bfbe578728f98c13d103789b127d1d75"
                  }}
                  style={styles.ImageBackground_683_157}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bd6/2fd2/0569743c35966b97a3be35667044338a"
                  }}
                  style={styles.ImageBackground_683_159}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f40d/db12/12949d35f500696b2810fd845f01363c"
                  }}
                  style={styles.ImageBackground_683_161}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f924/ca66/2e0fdda0be9c7950896209e6d553451e"
                  }}
                  style={styles.ImageBackground_683_163}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3df9/00c5/15450344ab4283fc4732e5c700d1671d"
                  }}
                  style={styles.ImageBackground_683_165}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88e7/4601/b1bc4bf9a507624a0a7745d71bec345c"
                  }}
                  style={styles.ImageBackground_683_167}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e5b/708c/2a7a476b8210f71e882da466dca97195"
                  }}
                  style={styles.ImageBackground_683_169}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ceb/73c7/9743ecf5409c30a3d2a09a7e190ab937"
                  }}
                  style={styles.ImageBackground_683_171}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9af4/cbcf/3b3636e76e67a9bd9b2c9fe5c88d0e47"
                  }}
                  style={styles.ImageBackground_683_173}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7173/35a9/b6f1b91c76af3b0b36d634d147d84aa5"
                  }}
                  style={styles.ImageBackground_683_175}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e1a/7441/60327529c22ee0a9f7a3b3a61bf690fe"
                  }}
                  style={styles.ImageBackground_683_177}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7715/cd52/a8185916cc466c7e7d20bd8887ee939b"
                  }}
                  style={styles.ImageBackground_683_179}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c1/a1f1/8c0310ca5822b1e87973e85f90db5e7f"
                  }}
                  style={styles.ImageBackground_683_181}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7715/cd52/a8185916cc466c7e7d20bd8887ee939b"
                  }}
                  style={styles.ImageBackground_683_183}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c1/a1f1/8c0310ca5822b1e87973e85f90db5e7f"
                  }}
                  style={styles.ImageBackground_683_185}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dff8/e78f/890872d502cc1607a07242239c00a70f"
                  }}
                  style={styles.ImageBackground_683_187}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/461d/0f69/450890621660a9d6c9991a976a27fe30"
                  }}
                  style={styles.ImageBackground_683_189}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8606/d790/725da58eea076b58cb91292f3f81bce4"
                  }}
                  style={styles.ImageBackground_683_191}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2a1/f363/476bd433e1ec29c0e1955c7f5cf395ef"
                  }}
                  style={styles.ImageBackground_683_193}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1574/8cfe/bc482bf63e6eb18e6a67c187b432df18"
                  }}
                  style={styles.ImageBackground_683_195}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0d8/f9da/0dd9cdec0f035c617d10d5ab96b8dbd8"
                  }}
                  style={styles.ImageBackground_683_197}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee99/963b/57a926e8a16e21ed2fe604d785acc928"
                  }}
                  style={styles.ImageBackground_683_199}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_683_201} />
        <View style={styles.View_683_202}>
          <Text style={styles.Text_683_202}>
            10% Instant Discount* on for first time user
          </Text>
        </View>
      </View>
      <View style={styles.View_683_84}>
        <View style={styles.View_683_85} />
        <View style={styles.View_683_86}>
          <View style={styles.View_683_87}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c19e/9695/c106f21e070eb4f80f592822fb9094df"
              }}
              style={styles.ImageBackground_683_88}
            />
            <View style={styles.View_683_89}>
              <Text style={styles.Text_683_89}>Ribbed Twist Flared Dress </Text>
            </View>
            <View style={styles.View_683_90}>
              <Text style={styles.Text_683_90}>2,500 SAR</Text>
            </View>
            <View style={styles.View_683_91}>
              <Text style={styles.Text_683_91}>Dion Lee</Text>
            </View>
            <View style={styles.View_683_92}>
              <Text style={styles.Text_683_92}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_683_93}>
          <View style={styles.View_683_94}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4cf/b6d2/ef86a31bf022219a086b18e9e314eaa7"
              }}
              style={styles.ImageBackground_683_95}
            />
            <View style={styles.View_683_96}>
              <Text style={styles.Text_683_96}>Ribbed Twist Flared Dress </Text>
            </View>
            <View style={styles.View_683_97}>
              <Text style={styles.Text_683_97}>2,500 SAR</Text>
            </View>
            <View style={styles.View_683_98}>
              <Text style={styles.Text_683_98}>Dion Lee</Text>
            </View>
            <View style={styles.View_683_99}>
              <Text style={styles.Text_683_99}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_683_100}>
          <Text style={styles.Text_683_100}>Most Popular</Text>
        </View>
        <View style={styles.View_683_101}>
          <Text style={styles.Text_683_101}>See all </Text>
        </View>
      </View>
      <View style={styles.View_683_102}>
        <View style={styles.View_683_103} />
        <View style={styles.View_683_104}>
          <View style={styles.View_683_105}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0913/a9e2/44c3d46a3914d9411b6e34878f00aa69"
              }}
              style={styles.ImageBackground_683_106}
            />
            <View style={styles.View_683_107}>
              <Text style={styles.Text_683_107}>
                Ribbed Twist Flared Dress{" "}
              </Text>
            </View>
            <View style={styles.View_683_108}>
              <Text style={styles.Text_683_108}>2,500 SAR</Text>
            </View>
            <View style={styles.View_683_109}>
              <Text style={styles.Text_683_109}>Dion Lee</Text>
            </View>
            <View style={styles.View_683_110}>
              <Text style={styles.Text_683_110}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_683_111}>
          <View style={styles.View_683_112}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deaa/8a42/8b1d16d31482a6ca0a5cf4d3348a3bf2"
              }}
              style={styles.ImageBackground_683_113}
            />
            <View style={styles.View_683_114}>
              <Text style={styles.Text_683_114}>
                Ribbed Twist Flared Dress{" "}
              </Text>
            </View>
            <View style={styles.View_683_115}>
              <Text style={styles.Text_683_115}>2,500 SAR</Text>
            </View>
            <View style={styles.View_683_116}>
              <Text style={styles.Text_683_116}>Dion Lee</Text>
            </View>
            <View style={styles.View_683_117}>
              <Text style={styles.Text_683_117}>heart</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_683_118}>
          <Text style={styles.Text_683_118}>We Picked For You</Text>
        </View>
        <View style={styles.View_683_119}>
          <Text style={styles.Text_683_119}>See all </Text>
        </View>
      </View>
      <View style={styles.View_683_44}>
        <View style={styles.View_683_45} />
        <View style={styles.View_683_60}>
          <Text style={styles.Text_683_60}>Shop By Category</Text>
        </View>
        <View style={styles.View_683_70}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/35fe/5916/334bd6fdd8b0aab74d83bcad35b9d778"
            }}
            style={styles.ImageBackground_683_66}
          />
          <View style={styles.View_683_68} />
          <View style={styles.View_683_69}>
            <Text style={styles.Text_683_69}>Clothing</Text>
          </View>
        </View>
        <View style={styles.View_683_75}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56d6/4975/31669b2f9686a21f9727e59a964a4740"
            }}
            style={styles.ImageBackground_683_76}
          />
          <View style={styles.View_683_77} />
          <View style={styles.View_683_78}>
            <Text style={styles.Text_683_78}>Bags</Text>
          </View>
        </View>
        <View style={styles.View_683_71}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d0e/fe92/7d4fca8072a426e8a9b1c1b1605aac7c"
            }}
            style={styles.ImageBackground_683_72}
          />
          <View style={styles.View_683_73} />
          <View style={styles.View_683_74}>
            <Text style={styles.Text_683_74}>Shoes</Text>
          </View>
        </View>
        <View style={styles.View_683_79}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4271/2f26/073017eee45694c271a4905a72168a53"
            }}
            style={styles.ImageBackground_683_80}
          />
          <View style={styles.View_683_81} />
          <View style={styles.View_683_82}>
            <Text style={styles.Text_683_82}>Accesories</Text>
          </View>
        </View>
        <View style={styles.View_683_61}>
          <Text style={styles.Text_683_61}>See all </Text>
        </View>
      </View>
      <View style={styles.View_685_188}>
        <View style={styles.View_139_797} />
        <View style={styles.View_683_1}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/57c1/2a9b/50cd3f18e1fe2fbb005628fb8e142f1d"
            }}
            style={styles.ImageBackground_I683_1_681_286}
          />
        </View>
        <View style={styles.View_683_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6727/2885/828ac497a9d2fb8288e6f090e66b001f"
            }}
            style={styles.ImageBackground_I683_0_681_273}
          />
        </View>
        <View style={styles.View_683_27}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/097e/9b9d/3066563fec23ed185e6ac271f6daa8cc"
            }}
            style={styles.ImageBackground_I683_27_683_22}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b670/15c9/fc4254b41fdcba01178ff9767d25c125"
          }}
          style={styles.ImageBackground_682_341}
        />
      </View>
      <View style={styles.View_685_189}>
        <View style={styles.View_I685_189_681_24}>
          <View style={styles.View_I685_189_681_25} />
        </View>
        <View style={styles.View_I685_189_681_26}>
          <View style={styles.View_I685_189_681_27}>
            <View style={styles.View_I685_189_681_28} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f017/180b/5ad32115e745e732d6d68b43f01e3ee1"
              }}
              style={styles.ImageBackground_I685_189_681_29}
            />
            <View style={styles.View_I685_189_681_30} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
            }}
            style={styles.ImageBackground_I685_189_681_31}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
            }}
            style={styles.ImageBackground_I685_189_681_35}
          />
        </View>
        <View style={styles.View_I685_189_681_40}>
          <View style={styles.View_I685_189_681_41}>
            <Text style={styles.Text_I685_189_681_41}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_683_32}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c8/778b/a21fdf570d6f1374250f9993957a607a"
          }}
          style={styles.ImageBackground_139_906}
        />
        <View style={styles.View_139_907} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa16/3e48/5ec1a4152b101226f67a05b83342e130"
          }}
          style={styles.ImageBackground_166_1412}
        />
        <View style={styles.View_139_912}>
          <Text style={styles.Text_139_912}>Up to 70% Off</Text>
        </View>
        <View style={styles.View_139_913}>
          <View style={styles.View_139_914} />
          <View style={styles.View_139_915}>
            <Text style={styles.Text_139_915}>Explore Now</Text>
          </View>
          <View style={styles.View_139_916}>
            <Text style={styles.Text_139_916}>plus</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_683_33}>
        <View style={styles.View_139_795} />
        <View style={styles.View_139_917}>
          <View style={styles.View_139_918}>
            <View style={styles.View_139_919} />
            <View style={styles.View_139_920}>
              <View style={styles.View_139_921}>
                <View style={styles.View_139_922} />
                <View style={styles.View_139_923}>
                  <Text style={styles.Text_139_923}>Shop NOW</Text>
                </View>
                <View style={styles.View_139_924}>
                  <View style={styles.View_139_925} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3884/4a88/a9e9e346af297ba0a5d066ca6e99b291"
                    }}
                    style={styles.ImageBackground_139_926}
                  />
                </View>
              </View>
              <View style={styles.View_139_927}>
                <Text style={styles.Text_139_927}>Take a Look</Text>
              </View>
              <View style={styles.View_139_928}>
                <Text style={styles.Text_139_928}>TO OUR Amazing BAGS</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ebd3/1822/31caf9ce2119e7f4506771fc9a3dc31b"
            }}
            style={styles.ImageBackground_139_929}
          />
        </View>
        <View style={styles.View_139_930}>
          <View style={styles.View_139_931}>
            <View style={styles.View_139_932} />
            <View style={styles.View_139_933}>
              <Text style={styles.Text_139_933}>Shop NOW</Text>
            </View>
            <View style={styles.View_139_934} />
            <View style={styles.View_139_935}>
              <Text style={styles.Text_139_935}>plus</Text>
            </View>
            <View style={styles.View_139_936}>
              <Text style={styles.Text_139_936}>Take A LOOK</Text>
            </View>
            <View style={styles.View_139_937}>
              <Text style={styles.Text_139_937}>TO OUR Amazing BAGS</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/675d/7210/cced2abcf835606cdb0b9af5dab1fba5"
            }}
            style={styles.ImageBackground_139_938}
          />
        </View>
      </View>
      <View style={styles.View_152_129}>
        <View style={styles.View_152_130} />
        <View style={styles.View_152_131}>
          <View style={styles.View_152_132}>
            <Text style={styles.Text_152_132}>Daily Deals</Text>
          </View>
          <View style={styles.View_152_133}>
            <View style={styles.View_152_134} />
            <View style={styles.View_152_135}>
              <View style={styles.View_152_136}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/18d9/aca1/d4fb1c247b71c3835e28169358e77c5b"
                  }}
                  style={styles.ImageBackground_152_137}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0903/24c7/00fabf3bc0d5b6072f23298f9fe626ad"
                  }}
                  style={styles.ImageBackground_152_138}
                />
                <View style={styles.View_152_139}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/876a/44d8/34b98dbca03156847394bf0f0012be08"
                    }}
                    style={styles.ImageBackground_152_140}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ec7/1b29/844348b4f0f3db6c15c0f89b14a06aa5"
                    }}
                    style={styles.ImageBackground_152_141}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2353/80b3/77140ecdb413272d64b6e6beb5a8476e"
                    }}
                    style={styles.ImageBackground_152_142}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af2f/02e3/572fa8f0208dc80ca3b38e37a2956a23"
                    }}
                    style={styles.ImageBackground_152_144}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8911/92d0/a1680273f8598b6bf0290aa5e6089952"
                    }}
                    style={styles.ImageBackground_152_146}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ac0/a9a6/927d93f912da27c565ac2a757259ca93"
                    }}
                    style={styles.ImageBackground_152_147}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_152_148}>
          <View style={styles.View_152_149}>
            <Text style={styles.Text_152_149}>Daily Hot Deals</Text>
          </View>
          <View style={styles.View_152_150}>
            <View style={styles.View_152_151} />
            <View style={styles.View_152_152}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29f6/03fb/804a6a36379011a1be19b1e588f23365"
                }}
                style={styles.ImageBackground_152_153}
              />
              <View style={styles.View_152_161}>
                <View style={styles.View_152_162}>
                  <View style={styles.View_152_163}>
                    <View style={styles.View_152_164}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fc3/0932/5a347872b3c7d94c29f3e20e7fa531a8"
                        }}
                        style={styles.ImageBackground_152_165}
                      />
                    </View>
                  </View>
                  <View style={styles.View_152_167}>
                    <View style={styles.View_152_168}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1657/b6a6/0dd81e657fdb4df821284ae2a6694c4f"
                        }}
                        style={styles.ImageBackground_152_169}
                      />
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e51/8127/0e7902946ae599f49e07da65f22724a1"
                    }}
                    style={styles.ImageBackground_152_171}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ccf/eef2/109e665935cd088f8123025ba288c7ec"
                    }}
                    style={styles.ImageBackground_152_173}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6493/e966/7fefb16c3196c3887567eec625bf644f"
                    }}
                    style={styles.ImageBackground_152_175}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b439/8e21/6dfc5574b3c38d6fdd6d065fd3a03200"
                    }}
                    style={styles.ImageBackground_152_177}
                  />
                </View>
                <View style={styles.View_152_180}>
                  <View style={styles.View_152_181}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ac7/062a/371ef8ce4ef904caa2c7962b738e55d1"
                      }}
                      style={styles.ImageBackground_152_182}
                    />
                  </View>
                </View>
                <View style={styles.View_152_184}>
                  <View style={styles.View_152_185}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d20a/bf01/088d006827f216b9b5f20318fd09c668"
                      }}
                      style={styles.ImageBackground_152_186}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_152_188}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/81cc/0778/022a079b2a41a0e880dc6d4f8abe7dd5"
                  }}
                  style={styles.ImageBackground_152_189}
                />
                <View style={styles.View_152_190}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fcc9/aacf/e02b2a46e20eaa3a4a432fa8f4b5a430"
                    }}
                    style={styles.ImageBackground_152_191}
                  />
                </View>
                <View style={styles.View_152_195}>
                  <View style={styles.View_152_196}>
                    <View style={styles.View_152_197}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b79/265a/efdb2b380b36ddcb4d158619e9cdd64a"
                        }}
                        style={styles.ImageBackground_152_198}
                      />
                    </View>
                    <View style={styles.View_152_200}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b79/265a/efdb2b380b36ddcb4d158619e9cdd64a"
                        }}
                        style={styles.ImageBackground_152_201}
                      />
                    </View>
                  </View>
                  <View style={styles.View_152_203}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e75/827a/5243fe2af7f78257d9ced1333bf85749"
                      }}
                      style={styles.ImageBackground_152_204}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f11/e0c7/3cf00aca3307077506e3cb57883c1ef8"
                      }}
                      style={styles.ImageBackground_152_206}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_166_753}>
        <View style={styles.View_139_1309}>
          <View style={styles.View_139_1310} />
          <View style={styles.View_139_1311} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3884/4a88/a9e9e346af297ba0a5d066ca6e99b291"
            }}
            style={styles.ImageBackground_139_1312}
          />
        </View>
        <View style={styles.View_152_457}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/790b/07a3/228f26bfa4aa506b5c573328e9f291bd"
            }}
            style={styles.ImageBackground_152_426}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91a1/3bb5/5bd7327355fde9ff90450160101ffed6"
            }}
            style={styles.ImageBackground_152_442}
          />
        </View>
        <View style={styles.View_152_460}>
          <View style={styles.View_139_1313}>
            <Text style={styles.Text_139_1313}>Buy in Just 3 Steps</Text>
          </View>
          <View style={styles.View_152_459}>
            <Text style={styles.Text_152_459}>
              we create the best &amp; easy way to buying products for our
              customers.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_682_305}>
        <View style={styles.View_I682_305_682_83}>
          <View style={styles.View_I682_305_682_84}>
            <View style={styles.View_I682_305_682_85} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/344d/6779/48b73303811be15a8924edd018ea6156"
            }}
            style={styles.ImageBackground_I682_305_682_86}
          />
        </View>
        <View style={styles.View_I682_305_682_223}>
          <View style={styles.View_I682_305_682_223_681_166} />
        </View>
        <View style={styles.View_I682_305_682_87}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ee/22ee/13807c8c84a7fbbcc02a451925a6a598"
            }}
            style={styles.ImageBackground_I682_305_682_87_681_290}
          />
        </View>
        <View style={styles.View_I682_305_682_88}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9edd/0a4f/d05dd7818c3a434d192d7d1398a20bc6"
            }}
            style={styles.ImageBackground_I682_305_682_88_681_277}
          />
        </View>
        <View style={styles.View_I682_305_682_89}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2126/c645/8108b190e87b203b796ce19e9b0825f5"
            }}
            style={styles.ImageBackground_I682_305_682_89_681_294}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2912/cbdf/d95026ae564db56c199ab74858d2109f"
          }}
          style={styles.ImageBackground_I682_305_682_90}
        />
        <View style={styles.View_I682_305_682_91}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cf4/d18e/2ad32f6414a3cad849705cef2c348534"
            }}
            style={styles.ImageBackground_I682_305_682_91_681_283}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3b2/cf20/174c7df860c26ea7becfe8e7f5e8ef52"
          }}
          style={styles.ImageBackground_I682_305_682_92}
        />
        <View style={styles.View_I682_305_682_93}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1d9/40fd/dbe1f0c1ce38584baf03fc34d6b4b7f9"
            }}
            style={styles.ImageBackground_I682_305_682_93_681_300}
          />
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_683_43: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104.23497267759562%")
  },
  View_139_683: {
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
  View_420_907: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.65027322404373%")
  },
  View_420_908: {
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
  ImageBackground_420_909: {
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
  View_420_943: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076501%")
  },
  Text_420_943: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_947: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163932%")
  },
  Text_420_947: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_948: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_420_948: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_420_949: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792263%")
  },
  Text_420_949: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_35: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("7.65027322404373%")
  },
  View_683_36: {
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
  ImageBackground_683_37: {
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
  View_683_38: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076501%")
  },
  Text_683_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_39: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163932%")
  },
  Text_683_39: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_40: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%")
  },
  Text_683_40: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_41: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792263%")
  },
  Text_683_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_796: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726782%")
  },
  Text_139_796: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_42: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("2.732240437158481%")
  },
  Text_683_42: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_144: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("156.14754098360655%")
  },
  View_683_145: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_683_146: {
    width: wp("17.944563802083334%"),
    minWidth: wp("17.944563802083334%"),
    height: hp("8.053374160182932%"),
    minHeight: hp("8.053374160182932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%"),
    top: hp("1.502732240437183%")
  },
  ImageBackground_683_147: {
    width: wp("14.439306640624999%"),
    minWidth: wp("14.439306640624999%"),
    height: hp("7.397185779008709%"),
    minHeight: hp("7.397185779008709%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7207682291666666%"),
    top: hp("0.6450382086748334%")
  },
  View_683_149: {
    width: wp("17.944563802083334%"),
    height: hp("8.053374160182932%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_683_150: {
    width: wp("17.944563802083334%"),
    minWidth: wp("17.944563802083334%"),
    height: hp("8.053374160182932%"),
    minHeight: hp("8.053374160182932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_683_151: {
    width: wp("17.944563802083334%"),
    height: hp("8.053374160182932%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_683_152: {
    width: wp("16.02725118001302%"),
    height: hp("7.938144246085746%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_683_153: {
    width: wp("1.9048041025797526%"),
    minWidth: wp("1.9048041025797526%"),
    height: hp("0.9758215784375133%"),
    minHeight: hp("0.9758215784375133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.532389322916668%"),
    top: hp("0%")
  },
  ImageBackground_683_155: {
    width: wp("4.695200093587239%"),
    minWidth: wp("4.695200093587239%"),
    height: hp("1.5011958085774073%"),
    minHeight: hp("1.5011958085774073%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0004557291666662522%"),
    top: hp("3.0017289959016296%")
  },
  ImageBackground_683_157: {
    width: wp("3.0027870178222655%"),
    minWidth: wp("3.0027870178222655%"),
    height: hp("2.344500953382482%"),
    minHeight: hp("2.344500953382482%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.1109374999999995%"),
    top: hp("1.7645497139685915%")
  },
  ImageBackground_683_159: {
    width: wp("4.139314778645834%"),
    minWidth: wp("4.139314778645834%"),
    height: hp("3.1682491302490234%"),
    minHeight: hp("3.1682491302490234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3453450520833323%"),
    top: hp("4.769880784665304%")
  },
  ImageBackground_683_161: {
    width: wp("4.2686203002929695%"),
    minWidth: wp("4.2686203002929695%"),
    height: hp("3.092586798746078%"),
    minHeight: hp("3.092586798746078%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261002604166666%"),
    top: hp("4.845591060450829%")
  },
  ImageBackground_683_163: {
    width: wp("2.130617904663086%"),
    minWidth: wp("2.130617904663086%"),
    height: hp("1.8422960583629504%"),
    minHeight: hp("1.8422960583629504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.983056640624999%"),
    top: hp("1.7644163037909948%")
  },
  ImageBackground_683_165: {
    width: wp("3.5866447448730474%"),
    minWidth: wp("3.5866447448730474%"),
    height: hp("0.7094910236004272%"),
    minHeight: hp("0.7094910236004272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.001795700990442%")
  },
  ImageBackground_683_167: {
    width: wp("2.2752057393391927%"),
    minWidth: wp("2.2752057393391927%"),
    height: hp("3.0925727281414095%"),
    minHeight: hp("3.0925727281414095%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.799869791666667%"),
    top: hp("4.845591060450829%")
  },
  ImageBackground_683_169: {
    width: wp("1.9815409342447916%"),
    minWidth: wp("1.9815409342447916%"),
    height: hp("3.0926154610889203%"),
    minHeight: hp("3.0926154610889203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.548258463541668%"),
    top: hp("4.845457650273232%")
  },
  ImageBackground_683_171: {
    width: wp("1.6694732666015626%"),
    minWidth: wp("1.6694732666015626%"),
    height: hp("0.3816951493747899%"),
    minHeight: hp("0.3816951493747899%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3818847656249984%"),
    top: hp("3.5883335467896416%")
  },
  ImageBackground_683_173: {
    width: wp("0.8748052597045898%"),
    minWidth: wp("0.8748052597045898%"),
    height: hp("0.8519443657880272%"),
    minHeight: hp("0.8519443657880272%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.9720703125000005%"),
    top: hp("2.4496776810109395%")
  },
  ImageBackground_683_175: {
    width: wp("1.2998755137125653%"),
    minWidth: wp("1.2998755137125653%"),
    height: hp("2.4128496972589546%"),
    minHeight: hp("2.4128496972589546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.538297526041667%"),
    top: hp("1.8551352245560224%")
  },
  ImageBackground_683_177: {
    width: wp("3.074075063069661%"),
    minWidth: wp("3.074075063069661%"),
    height: hp("1.5787514181084972%"),
    minHeight: hp("1.5787514181084972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.953173828125%"),
    top: hp("0.989103056694006%")
  },
  ImageBackground_683_179: {
    width: wp("2.86790288289388%"),
    minWidth: wp("2.86790288289388%"),
    height: hp("1.4248053232828775%"),
    minHeight: hp("1.4248053232828775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.261458333333334%"),
    top: hp("0.17436710211748618%")
  },
  ImageBackground_683_181: {
    width: wp("1.9497419993082683%"),
    minWidth: wp("1.9497419993082683%"),
    height: hp("1.402426026557964%"),
    minHeight: hp("1.402426026557964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.179589843750001%"),
    top: hp("0.1967133068647513%")
  },
  ImageBackground_683_183: {
    width: wp("2.868099721272787%"),
    minWidth: wp("2.868099721272787%"),
    height: hp("1.424759724101082%"),
    minHeight: hp("1.424759724101082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.92120768229167%"),
    top: hp("2.97891585553279%")
  },
  ImageBackground_683_185: {
    width: wp("1.9500999450683594%"),
    minWidth: wp("1.9500999450683594%"),
    height: hp("1.4028718562725462%"),
    minHeight: hp("1.4028718562725462%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.839143880208333%"),
    top: hp("3.000795124658481%")
  },
  ImageBackground_683_187: {
    width: wp("1.4305625915527345%"),
    minWidth: wp("1.4305625915527345%"),
    height: hp("0.9758153248354386%"),
    minHeight: hp("0.9758153248354386%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.009244791666667%"),
    top: hp("0%")
  },
  ImageBackground_683_189: {
    width: wp("2.9745473225911456%"),
    minWidth: wp("2.9745473225911456%"),
    height: hp("1.204509161860565%"),
    minHeight: hp("1.204509161860565%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.810628255208333%"),
    top: hp("3.1344721226092815%")
  },
  ImageBackground_683_191: {
    width: wp("3.900008900960286%"),
    minWidth: wp("3.900008900960286%"),
    height: hp("1.6682421574827102%"),
    minHeight: hp("1.6682421574827102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.785139973958333%"),
    top: hp("2.7998793971994473%")
  },
  ImageBackground_683_193: {
    width: wp("3.9777702331542972%"),
    minWidth: wp("3.9777702331542972%"),
    height: hp("1.6683746556766699%"),
    minHeight: hp("1.6683746556766699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25667317708333304%"),
    top: hp("4.339032616120221%")
  },
  ImageBackground_683_195: {
    width: wp("2.0238718668619793%"),
    minWidth: wp("2.0238718668619793%"),
    height: hp("0.698871430152101%"),
    minHeight: hp("0.698871430152101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.761181640625%"),
    top: hp("3.1344054175204974%")
  },
  ImageBackground_683_197: {
    width: wp("2.269805653889974%"),
    minWidth: wp("2.269805653889974%"),
    height: hp("1.20279723829259%"),
    minHeight: hp("1.20279723829259%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.415364583333331%"),
    top: hp("2.7998793971994473%")
  },
  ImageBackground_683_199: {
    width: wp("3.5043802897135414%"),
    minWidth: wp("3.5043802897135414%"),
    height: hp("1.59360242020237%"),
    minHeight: hp("1.59360242020237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2187988281249984%"),
    top: hp("3.606744151297818%")
  },
  View_683_201: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.4%"),
    top: hp("2.732240437158481%"),
    backgroundColor: "rgba(221, 221, 221, 1)"
  },
  View_683_202: {
    width: wp("53.86666666666666%"),
    minWidth: wp("53.86666666666666%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.266666666666666%"),
    top: hp("2.049180327868868%")
  },
  Text_683_202: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_84: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("226.63934426229505%")
  },
  View_683_85: {
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
  View_683_86: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.65027322404373%")
  },
  View_683_87: {
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
  ImageBackground_683_88: {
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
  View_683_89: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_683_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_90: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.885245901639394%")
  },
  Text_683_90: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_91: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606575%")
  },
  Text_683_91: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_92: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792547%")
  },
  Text_683_92: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_93: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("7.65027322404373%")
  },
  View_683_94: {
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
  ImageBackground_683_95: {
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
  View_683_96: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076503%")
  },
  Text_683_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_97: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.885245901639394%")
  },
  Text_683_97: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_98: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606575%")
  },
  Text_683_98: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_99: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185792547%")
  },
  Text_683_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_100: {
    width: wp("29.333333333333332%"),
    minWidth: wp("29.333333333333332%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726796%")
  },
  Text_683_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_101: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("2.7322404371585094%")
  },
  Text_683_101: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_102: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50.27322404371585%"),
    minHeight: hp("50.27322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("291.120218579235%")
  },
  View_683_103: {
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
  View_683_104: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.650273224043758%")
  },
  View_683_105: {
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
  ImageBackground_683_106: {
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
  View_683_107: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076497%")
  },
  Text_683_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_108: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163928%")
  },
  Text_683_108: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_109: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360652%")
  },
  Text_683_109: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_110: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185791694%")
  },
  Text_683_110: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_111: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("39.48087431693989%"),
    minHeight: hp("39.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("7.650273224043758%")
  },
  View_683_112: {
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
  ImageBackground_683_113: {
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
  View_683_114: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33.87978142076497%")
  },
  Text_683_114: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_115: {
    width: wp("17.599999999999998%"),
    minWidth: wp("17.599999999999998%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.88524590163928%")
  },
  Text_683_115: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_116: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360652%")
  },
  Text_683_116: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_117: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.2%"),
    top: hp("1.3661202185791694%")
  },
  Text_683_117: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_118: {
    width: wp("39.733333333333334%"),
    minWidth: wp("39.733333333333334%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.185792349726796%")
  },
  Text_683_118: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_119: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("2.7322404371584526%")
  },
  Text_683_119: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_44: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.69398907103825%"),
    minHeight: hp("56.69398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("168.30601092896177%")
  },
  View_683_45: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("56.69398907103825%"),
    minHeight: hp("56.69398907103825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_683_60: {
    width: wp("39.46666666666667%"),
    minWidth: wp("39.46666666666667%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.1857923497267393%")
  },
  Text_683_60: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_70: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.650273224043701%")
  },
  ImageBackground_683_66: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_683_68: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_683_69: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("17.21311475409837%")
  },
  Text_683_69: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_75: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("32.10382513661199%")
  },
  ImageBackground_683_76: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_683_77: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_683_78: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("17.21311475409837%")
  },
  Text_683_78: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_71: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("7.650273224043701%")
  },
  ImageBackground_683_72: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_683_73: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_683_74: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("17.21311475409837%")
  },
  Text_683_74: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_79: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("32.10382513661199%")
  },
  ImageBackground_683_80: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_683_81: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.404371584699454%"),
    minHeight: hp("22.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_683_82: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.466666666666669%"),
    top: hp("17.21311475409837%")
  },
  Text_683_82: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_61: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("2.7322404371584526%")
  },
  Text_683_61: {
    color: "rgba(184, 114, 83, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_685_188: {
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
  View_139_797: {
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
  View_683_1: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I683_1_681_286: {
    flexGrow: 1,
    width: wp("4.533333333333333%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9333333333333371%"),
    top: hp("0.27322404371584774%")
  },
  View_683_0: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("8.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I683_0_681_273: {
    flexGrow: 1,
    width: wp("5.003813680013021%"),
    height: hp("2.6259521317612275%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7408121744791742%"),
    top: hp("0.37948525017076484%")
  },
  View_683_27: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("8.060109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I683_27_683_22: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333332%"),
    top: hp("0.8196721311475414%")
  },
  ImageBackground_682_341: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("8.60655737704918%")
  },
  View_685_189: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.372747306615277%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I685_189_681_24: {
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
  View_I685_189_681_25: {
    width: wp("100%"),
    height: hp("6.0109289617486334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_189_681_26: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%"),
    top: hp("2.0491803278688523%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I685_189_681_27: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288891601562511%"),
    top: hp("0.045559575648907114%")
  },
  View_I685_189_681_28: {
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
  ImageBackground_I685_189_681_29: {
    width: wp("0.3541434605916341%"),
    minWidth: wp("0.3541434605916341%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0.500888511782787%")
  },
  View_I685_189_681_30: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333172%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I685_189_681_31: {
    width: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    top: hp("0.045159345116120075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%")
  },
  ImageBackground_I685_189_681_35: {
    width: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    top: hp("0.09105244620901631%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I685_189_681_40: {
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
  View_I685_189_681_41: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.06830601092896194%")
  },
  Text_I685_189_681_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_683_32: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.6448087431694%")
  },
  ImageBackground_139_906: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_139_907: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("52.459016393442624%"),
    minHeight: hp("52.459016393442624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_166_1412: {
    width: wp("12.533333333333333%"),
    minWidth: wp("12.533333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.733333333333334%"),
    top: hp("49.31693989071038%")
  },
  View_139_912: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("32.650273224043715%")
  },
  Text_139_912: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_913: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("39.75409836065574%")
  },
  View_139_914: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
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
  View_139_915: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.800000000000004%"),
    top: hp("1.229508196721298%")
  },
  Text_139_915: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_916: {
    width: wp("2.933333333333333%"),
    minWidth: wp("2.933333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.200000000000003%"),
    top: hp("1.639344262295083%")
  },
  Text_139_916: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_683_33: {
    width: wp("155.20000000000002%"),
    minWidth: wp("155.20000000000002%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("83.7431693989071%")
  },
  View_139_795: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18.852459016393443%"),
    minHeight: hp("18.852459016393443%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_139_917: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("2.185792349726782%")
  },
  View_139_918: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_139_919: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_139_920: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    height: hp("11.885245901639344%"),
    minHeight: hp("11.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.13333333333333%"),
    top: hp("1.3661202185792405%")
  },
  View_139_921: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.879781420765013%")
  },
  View_139_922: {
    width: wp("28.000000000000004%"),
    minWidth: wp("28.000000000000004%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  View_139_923: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6666666666666714%"),
    top: hp("0.546448087431699%")
  },
  Text_139_923: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_139_924: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.066666666666677%"),
    top: hp("0.40983606557378494%")
  },
  View_139_925: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_139_926: {
    width: wp("2.190625%"),
    minWidth: wp("2.190625%"),
    height: hp("1.0261910860655739%"),
    minHeight: hp("1.0261910860655739%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666558%"),
    top: hp("0.5464480874316848%")
  },
  View_139_927: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_139_927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_928: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%")
  },
  Text_139_928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_139_929: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%"),
    top: hp("1.0928961748633839%"),
    resizeMode: "cover"
  },
  View_139_930: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.13333333333334%"),
    top: hp("2.185792349726782%")
  },
  View_139_931: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_139_932: {
    width: wp("73.06666666666666%"),
    minWidth: wp("73.06666666666666%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  View_139_933: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("10.792349726775953%")
  },
  Text_139_933: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_139_934: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    top: hp("10.792349726775953%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_139_935: {
    width: wp("2.4%"),
    minWidth: wp("2.4%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.86666666666666%"),
    top: hp("11.065573770491795%")
  },
  Text_139_935: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_936: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("1.3661202185792405%")
  },
  Text_139_936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_139_937: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("5.191256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("4.37158469945355%")
  },
  Text_139_937: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_139_938: {
    width: wp("24.266666666666666%"),
    minWidth: wp("24.266666666666666%"),
    height: hp("12.431693989071038%"),
    minHeight: hp("12.431693989071038%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.0928961748633839%")
  },
  View_152_129: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.26666666666666666%"),
    top: hp("15.846994535519126%")
  },
  View_152_130: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_152_131: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333333%"),
    top: hp("2.7322404371584703%")
  },
  View_152_132: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.26666666666667%"),
    top: hp("2.0491803278688536%")
  },
  Text_152_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_133: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_134: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_152_135: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.333333333333334%"),
    top: hp("0.5464480874316919%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_152_136: {
    width: wp("8.12652791341146%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2700846354166666%")
  },
  ImageBackground_152_137: {
    width: wp("8.126500447591146%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_152_138: {
    width: wp("4.063530476888021%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0630045572916655%")
  },
  View_152_139: {
    width: wp("5.000596110026042%"),
    height: hp("2.5617716742343593%"),
    top: hp("2.252230618169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.562662760416667%")
  },
  ImageBackground_152_140: {
    width: wp("5.000577799479167%"),
    height: hp("2.5617716742343593%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_152_141: {
    width: wp("2.5002888997395836%"),
    height: hp("2.5617716742343593%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.500325520833332%")
  },
  ImageBackground_152_142: {
    width: wp("0.6250732421875%"),
    height: hp("0.3202224689754632%"),
    top: hp("1.6011222464139365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8128417968750004%")
  },
  ImageBackground_152_144: {
    width: wp("0.6250712076822916%"),
    height: hp("0.32022168727520384%"),
    top: hp("0.6404355575478142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.562662760416666%")
  },
  ImageBackground_152_146: {
    width: wp("1.8752604166666667%"),
    height: hp("1.2808075368078682%"),
    top: hp("0.6405022626366126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5626302083333332%")
  },
  ImageBackground_152_147: {
    width: wp("0.9376271565755209%"),
    height: hp("0.9290054196217021%"),
    top: hp("0.6405022626366126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.500325520833332%")
  },
  View_152_148: {
    width: wp("42.4%"),
    minWidth: wp("42.4%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.33333333333333%"),
    top: hp("2.7322404371584703%")
  },
  View_152_149: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.266666666666666%"),
    top: hp("2.0491803278688536%")
  },
  Text_152_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_150: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_151: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_152_152: {
    width: wp("8.085713704427084%"),
    height: hp("4.495797912931182%"),
    top: hp("0.8885117827868818%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4903645833333385%")
  },
  ImageBackground_152_153: {
    width: wp("4.461088053385417%"),
    minWidth: wp("4.461088053385417%"),
    height: hp("3.115627935023907%"),
    minHeight: hp("3.115627935023907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_161: {
    width: wp("7.5794718424479175%"),
    height: hp("3.0854355442067964%"),
    top: hp("1.4103456924521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5062418619791629%")
  },
  View_152_162: {
    width: wp("7.5794718424479175%"),
    height: hp("3.0854355442067964%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_152_163: {
    width: wp("6.039383951822916%"),
    height: hp("3.0854355442067964%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00012207031250710543%")
  },
  View_152_164: {
    width: wp("6.039383951822916%"),
    height: hp("3.0854355442067964%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_152_165: {
    width: wp("6.039383951822916%"),
    minWidth: wp("6.039383951822916%"),
    height: hp("3.0854355442067964%"),
    minHeight: hp("3.0854355442067964%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_167: {
    width: wp("6.03941650390625%"),
    height: hp("2.118320152407787%"),
    top: hp("0.9670903773907114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_152_168: {
    width: wp("6.03941650390625%"),
    height: hp("2.118320152407787%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_152_169: {
    width: wp("6.03941650390625%"),
    minWidth: wp("6.03941650390625%"),
    height: hp("2.118320152407787%"),
    minHeight: hp("2.118320152407787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_152_171: {
    width: wp("2.8725830078125%"),
    minWidth: wp("2.8725830078125%"),
    height: hp("1.478509955067452%"),
    minHeight: hp("1.478509955067452%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.70689290364583%"),
    top: hp("0.01707650273224104%")
  },
  ImageBackground_152_173: {
    width: wp("2.0179484049479166%"),
    minWidth: wp("2.0179484049479166%"),
    height: hp("0.7151285807291667%"),
    minHeight: hp("0.7151285807291667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.53489583333333%"),
    top: hp("0.01707650273224104%")
  },
  ImageBackground_152_175: {
    width: wp("0.7498087565104167%"),
    minWidth: wp("0.7498087565104167%"),
    height: hp("0.27432467768101093%"),
    minHeight: hp("0.27432467768101093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.184000651041664%"),
    top: hp("0.03081775102459261%")
  },
  ImageBackground_152_177: {
    width: wp("1.79583740234375%"),
    minWidth: wp("1.79583740234375%"),
    height: hp("1.0392152546533469%"),
    minHeight: hp("1.0392152546533469%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.70692545572917%"),
    top: hp("0.4563295124658495%")
  },
  View_152_180: {
    width: wp("2.1003580729166664%"),
    height: hp("1.0730347346738387%"),
    top: hp("0.2137231045082011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2190673828125043%")
  },
  View_152_181: {
    width: wp("2.1003580729166664%"),
    height: hp("1.0730347346738387%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_152_182: {
    width: wp("2.1003580729166664%"),
    minWidth: wp("2.1003580729166664%"),
    height: hp("1.0730347346738387%"),
    minHeight: hp("1.0730347346738387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_184: {
    width: wp("0.6939697265625%"),
    height: hp("0.3545375469603825%"),
    top: hp("0.39602811219262435%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2685302734374986%")
  },
  View_152_185: {
    width: wp("0.6939697265625%"),
    height: hp("0.3545375469603825%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_152_186: {
    width: wp("0.6939697265625%"),
    minWidth: wp("0.6939697265625%"),
    height: hp("0.3545375469603825%"),
    minHeight: hp("0.3545375469603825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_188: {
    width: wp("3.2178548177083335%"),
    height: hp("1.643921899013832%"),
    top: hp("2.117553043886616%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9381510416666643%")
  },
  ImageBackground_152_189: {
    width: wp("3.2177408854166667%"),
    minWidth: wp("3.2177408854166667%"),
    height: hp("1.6439052227416324%"),
    minHeight: hp("1.6439052227416324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_190: {
    width: wp("3.217728678385417%"),
    height: hp("1.64368009306694%"),
    top: hp("0.00026682035518987846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.00013020833333143855%")
  },
  ImageBackground_152_191: {
    width: wp("3.217728678385417%"),
    minWidth: wp("3.217728678385417%"),
    height: hp("1.64368009306694%"),
    minHeight: hp("1.64368009306694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_195: {
    width: wp("1.7947631835937499%"),
    height: hp("0.9169114743425546%"),
    top: hp("0.363542733948087%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7114583333333329%")
  },
  View_152_196: {
    width: wp("1.7947631835937499%"),
    height: hp("0.9169114743425546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_152_197: {
    width: wp("0.6545369466145834%"),
    height: hp("0.3343842720073429%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_152_198: {
    width: wp("0.6545369466145834%"),
    minWidth: wp("0.6545369466145834%"),
    height: hp("0.3343842720073429%"),
    minHeight: hp("0.3343842720073429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_200: {
    width: wp("0.6545328776041667%"),
    height: hp("0.3343926101434426%"),
    top: hp("0.5825355404713086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1402343750000057%")
  },
  ImageBackground_152_201: {
    width: wp("0.6545328776041667%"),
    minWidth: wp("0.6545328776041667%"),
    height: hp("0.3343926101434426%"),
    minHeight: hp("0.3343926101434426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_152_203: {
    width: wp("1.5277628580729166%"),
    height: hp("0.7805245821593237%"),
    top: hp("0.05082927766393297%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.16744791666666003%")
  },
  ImageBackground_152_204: {
    width: wp("1.5277628580729166%"),
    minWidth: wp("1.5277628580729166%"),
    height: hp("0.7805245821593237%"),
    minHeight: hp("0.7805245821593237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_152_206: {
    width: wp("0.7138997395833333%"),
    minWidth: wp("0.7138997395833333%"),
    height: hp("0.3647184111381489%"),
    minHeight: hp("0.3647184111381489%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4715006510416728%"),
    top: hp("0.1750341530054662%")
  },
  View_166_753: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("278.551912568306%")
  },
  View_139_1309: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_139_1310: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_139_1311: {
    width: wp("92.80000000000001%"),
    minWidth: wp("92.80000000000001%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  ImageBackground_139_1312: {
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
  View_152_457: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("2.7322404371584526%")
  },
  ImageBackground_152_426: {
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
  ImageBackground_152_442: {
    width: wp("6.666666666666667%"),
    height: hp("3.415300546448088%"),
    top: hp("1.0928961748633697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333346%")
  },
  View_152_460: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("2.0491803278688394%")
  },
  View_139_1313: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_139_1313: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_152_459: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426528%")
  },
  Text_152_459: {
    color: "rgba(138, 138, 138, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_682_305: {
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
  View_I682_305_682_83: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311464%")
  },
  View_I682_305_682_84: {
    width: wp("100%"),
    height: hp("11.475409836065573%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I682_305_682_85: {
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
  ImageBackground_I682_305_682_86: {
    width: wp("30.933333333333334%"),
    height: hp("4.918032786885246%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.66666666666667%")
  },
  View_I682_305_682_223: {
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
  View_I682_305_682_223_681_166: {
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
  View_I682_305_682_87: {
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
  ImageBackground_I682_305_682_87_681_290: {
    flexGrow: 1,
    width: wp("4.039746348063151%"),
    height: hp("2.6260547950619557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.066666666666677%"),
    top: hp("0.2732240437158566%")
  },
  View_I682_305_682_88: {
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
  ImageBackground_I682_305_682_88_681_277: {
    flexGrow: 1,
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333385%"),
    top: hp("0.2732240437158566%")
  },
  View_I682_305_682_89: {
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
  ImageBackground_I682_305_682_89_681_294: {
    flexGrow: 1,
    width: wp("4.933355204264323%"),
    height: hp("2.4725817591766193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.73330891927084%"),
    top: hp("0.4439890710382599%")
  },
  ImageBackground_I682_305_682_90: {
    flexGrow: 1,
    width: wp("2.9333335876464846%"),
    height: hp("0.7513663156436441%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("4.508196721311464%")
  },
  View_I682_305_682_91: {
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
  ImageBackground_I682_305_682_91_681_283: {
    flexGrow: 1,
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%"),
    top: hp("0.2732240437158566%")
  },
  ImageBackground_I682_305_682_92: {
    flexGrow: 1,
    width: wp("14.933333333333335%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("0%")
  },
  View_I682_305_682_93: {
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
  ImageBackground_I682_305_682_93_681_300: {
    flexGrow: 1,
    width: wp("6.577740478515624%"),
    height: hp("3.3696521175363676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9778401692708343%"),
    top: hp("0.5010219219603727%")
  },
  View_2: { height: 2593 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
