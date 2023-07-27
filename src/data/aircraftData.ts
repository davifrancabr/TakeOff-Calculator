const boeing = {
  b737600: {
    weightOperation: {
      maximumTaxiWeight: 57832,
      maximumTakeoffWeight: 57606,
      maximumLandingWeight: 54657,
      maximumZeroFuelWeight: 51709,
    },

    slopeCorrection: {
      dryRunway: {},
      wetRunway: {},
    },
  },
  b737700: {
    weightOperation: {
      maximumTaxiWeight: 60554,
      maximumTakeoffWeight: 60327,
      maximumLandingWeight: 58059,
      maximumZeroFuelWeight: 54657,
    },
    baseVSpeeds: {
      flap1: [
        {
          weigth: 90,
          v1: 169,
          vr: 171,
          v2: 175,
        },
        {
          weigth: 85,
          v1: 163,
          vr: 166,
          v2: 171,
        },
        {
          weigth: 80,
          v1: 158,
          vr: 160,
          v2: 167,
        },
        {
          weigth: 75,
          v1: 153,
          vr: 155,
          v2: 162,
        },
        {
          weigth: 70,
          v1: 147,
          vr: 149,
          v2: 158,
        },
        {
          weigth: 65,
          v1: 141,
          vr: 143,
          v2: 153,
        },
        {
          weigth: 60,
          v1: 135,
          vr: 136,
          v2: 148,
        },
        {
          weigth: 55,
          v1: 128,
          vr: 129,
          v2: 143,
        },
        {
          weigth: 50,
          v1: 121,
          vr: 122,
          v2: 137,
        },
        {
          weigth: 45,
          v1: 113,
          vr: 114,
          v2: 131,
        },
        {
          weigth: 40,
          v1: 105,
          vr: 106,
          v2: 125,
        },
      ],
      flap5: [
        {
          weigth: 90,
          v1: 161,
          vr: 163,
          v2: 168,
        },
        {
          weigth: 85,
          v1: 157,
          vr: 159,
          v2: 164,
        },
        {
          weigth: 80,
          v1: 152,
          vr: 154,
          v2: 160,
        },
        {
          weigth: 75,
          v1: 147,
          vr: 148,
          v2: 156,
        },
        {
          weigth: 70,
          v1: 141,
          vr: 143,
          v2: 152,
        },
        {
          weigth: 65,
          v1: 135,
          vr: 137,
          v2: 147,
        },
        {
          weigth: 60,
          v1: 129,
          vr: 131,
          v2: 143,
        },
        {
          weigth: 55,
          v1: 123,
          vr: 124,
          v2: 137,
        },
        {
          weigth: 50,
          v1: 116,
          vr: 117,
          v2: 132,
        },
        {
          weigth: 45,
          v1: 109,
          vr: 110,
          v2: 126,
        },
        {
          weigth: 40,
          v1: 101,
          vr: 102,
          v2: 120,
        },
      ],
      flap10: [
        {
          weigth: 85,
          v1: 156,
          vr: 157,
          v2: 162,
        },
        {
          weigth: 80,
          v1: 151,
          vr: 152,
          v2: 158,
        },
        {
          weigth: 75,
          v1: 146,
          vr: 147,
          v2: 154,
        },
        {
          weigth: 70,
          v1: 140,
          vr: 141,
          v2: 150,
        },
        {
          weigth: 65,
          v1: 134,
          vr: 136,
          v2: 146,
        },
        {
          weigth: 60,
          v1: 128,
          vr: 129,
          v2: 141,
        },
        {
          weigth: 55,
          v1: 122,
          vr: 123,
          v2: 136,
        },
        {
          weigth: 50,
          v1: 115,
          vr: 116,
          v2: 130,
        },
        {
          weigth: 45,
          v1: 108,
          vr: 108,
          v2: 119,
        },
        {
          weigth: 40,
          v1: 100,
          vr: 101,
          v2: 119,
        },
      ],
      flap15: [
        {
          weigth: 80,
          v1: 148,
          vr: 149,
          v2: 155,
        },
        {
          weigth: 75,
          v1: 142,
          vr: 144,
          v2: 151,
        },
        {
          weigth: 70,
          v1: 137,
          vr: 138,
          v2: 147,
        },
        {
          weigth: 65,
          v1: 131,
          vr: 133,
          v2: 143,
        },
        {
          weigth: 60,
          v1: 125,
          vr: 126,
          v2: 138,
        },
        {
          weigth: 55,
          v1: 119,
          vr: 120,
          v2: 133,
        },
        {
          weigth: 50,
          v1: 112,
          vr: 113,
          v2: 128,
        },
        {
          weigth: 45,
          v1: 105,
          vr: 106,
          v2: 122,
        },
        {
          weigth: 40,
          v1: 98,
          vr: 99,
          v2: 177,
        },
      ],
      flap25: [
        {
          weigth: 80,
          v1: 145,
          vr: 146,
          v2: 153,
        },
        {
          weigth: 75,
          v1: 140,
          vr: 141,
          v2: 149,
        },
        {
          weigth: 70,
          v1: 135,
          vr: 136,
          v2: 145,
        },
        {
          weigth: 65,
          v1: 129,
          vr: 130,
          v2: 140,
        },
        {
          weigth: 60,
          v1: 123,
          vr: 124,
          v2: 136,
        },
        {
          weigth: 55,
          v1: 117,
          vr: 118,
          v2: 131,
        },
        {
          weigth: 50,
          v1: 110,
          vr: 111,
          v2: 126,
        },
        {
          weigth: 45,
          v1: 103,
          vr: 104,
          v2: 120,
        },
        {
          weigth: 40,
          v1: 96,
          vr: 97,
          v2: 115,
        },
      ],
    },
    vSpeedsAdjustments: {
      v1: [
        {
          // V1 Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: 5,
            },
            {
              temp: 60,
              v1Adj: 4,
            },
            {
              temp: 50,
              v1Adj: 2,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V1 Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: 6,
            },
            {
              temp: 60,
              v1Adj: 5,
            },
            {
              temp: 50,
              v1Adj: 3,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V1 Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 6,
            },
            {
              temp: 50,
              v1Adj: 4,
            },
            {
              temp: 40,
              v1Adj: 3,
            },
            {
              temp: 30,
              v1Adj: 1,
            },
            {
              temp: 20,
              v1Adj: 1,
            },
            {
              temp: -60,
              v1Adj: 1,
            },
          ],
        },
        {
          // V1 Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 7,
            },
            {
              temp: 50,
              v1Adj: 5,
            },
            {
              temp: 40,
              v1Adj: 4,
            },
            {
              temp: 30,
              v1Adj: 2,
            },
            {
              temp: 20,
              v1Adj: 2,
            },
            {
              temp: -60,
              v1Adj: 2,
            },
          ],
        },
        {
          // V1 Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 6,
            },
            {
              temp: 40,
              v1Adj: 5,
            },
            {
              temp: 30,
              v1Adj: 4,
            },
            {
              temp: 20,
              v1Adj: 3,
            },
            {
              temp: -60,
              v1Adj: 3,
            },
          ],
        },
        {
          // V1 Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 7,
            },
            {
              temp: 40,
              v1Adj: 6,
            },
            {
              temp: 30,
              v1Adj: 5,
            },
            {
              temp: 20,
              v1Adj: 4,
            },
            {
              temp: -60,
              v1Adj: 4,
            },
          ],
        },
        {
          // V1 Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 9,
            },
            {
              temp: 40,
              v1Adj: 7,
            },
            {
              temp: 30,
              v1Adj: 6,
            },
            {
              temp: 20,
              v1Adj: 5,
            },
            {
              temp: -60,
              v1Adj: 5,
            },
          ],
        },
      ],
      vr: [
        {
          // VR Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: 4,
            },
            {
              temp: 60,
              v1Adj: 3,
            },
            {
              temp: 50,
              v1Adj: 2,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // VR Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: 5,
            },
            {
              temp: 60,
              v1Adj: 4,
            },
            {
              temp: 50,
              v1Adj: 3,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // VR Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 5,
            },
            {
              temp: 50,
              v1Adj: 4,
            },
            {
              temp: 40,
              v1Adj: 3,
            },
            {
              temp: 30,
              v1Adj: 1,
            },
            {
              temp: 20,
              v1Adj: 1,
            },
            {
              temp: -60,
              v1Adj: 1,
            },
          ],
        },
        {
          // VR Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 6,
            },
            {
              temp: 50,
              v1Adj: 5,
            },
            {
              temp: 40,
              v1Adj: 4,
            },
            {
              temp: 30,
              v1Adj: 3,
            },
            {
              temp: 20,
              v1Adj: 2,
            },
            {
              temp: -60,
              v1Adj: 2,
            },
          ],
        },
        {
          // VR Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 6,
            },
            {
              temp: 40,
              v1Adj: 5,
            },
            {
              temp: 30,
              v1Adj: 4,
            },
            {
              temp: 20,
              v1Adj: 3,
            },
            {
              temp: -60,
              v1Adj: 3,
            },
          ],
        },
        {
          // VR Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 7,
            },
            {
              temp: 40,
              v1Adj: 6,
            },
            {
              temp: 30,
              v1Adj: 5,
            },
            {
              temp: 20,
              v1Adj: 4,
            },
            {
              temp: -60,
              v1Adj: 4,
            },
          ],
        },
        {
          // VR Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 8,
            },
            {
              temp: 40,
              v1Adj: 7,
            },
            {
              temp: 30,
              v1Adj: 6,
            },
            {
              temp: 20,
              v1Adj: 5,
            },
            {
              temp: -60,
              v1Adj: 5,
            },
          ],
        },
      ],
      v2: [
        {
          // V2 Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: -3,
            },
            {
              temp: 60,
              v1Adj: -2,
            },
            {
              temp: 50,
              v1Adj: -2,
            },
            {
              temp: 40,
              v1Adj: -1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V2 Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: -3,
            },
            {
              temp: 60,
              v1Adj: -3,
            },
            {
              temp: 50,
              v1Adj: -2,
            },
            {
              temp: 40,
              v1Adj: -1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V2 Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: -3,
            },
            {
              temp: 50,
              v1Adj: -3,
            },
            {
              temp: 40,
              v1Adj: -2,
            },
            {
              temp: 30,
              v1Adj: -1,
            },
            {
              temp: 20,
              v1Adj: -1,
            },
            {
              temp: -60,
              v1Adj: -1,
            },
          ],
        },
        {
          // V2 Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: -4,
            },
            {
              temp: 50,
              v1Adj: -3,
            },
            {
              temp: 40,
              v1Adj: -2,
            },
            {
              temp: 30,
              v1Adj: -2,
            },
            {
              temp: 20,
              v1Adj: -1,
            },
            {
              temp: -60,
              v1Adj: -1,
            },
          ],
        },
        {
          // V2 Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -4,
            },
            {
              temp: 40,
              v1Adj: -3,
            },
            {
              temp: 30,
              v1Adj: -2,
            },
            {
              temp: 20,
              v1Adj: -2,
            },
            {
              temp: -60,
              v1Adj: -2,
            },
          ],
        },
        {
          // V2 Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -5,
            },
            {
              temp: 40,
              v1Adj: -4,
            },
            {
              temp: 30,
              v1Adj: -3,
            },
            {
              temp: 20,
              v1Adj: -3,
            },
            {
              temp: -60,
              v1Adj: -2,
            },
          ],
        },
        {
          // V2 Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -6,
            },
            {
              temp: 40,
              v1Adj: -5,
            },
            {
              temp: 30,
              v1Adj: -4,
            },
            {
              temp: 20,
              v1Adj: -3,
            },
            {
              temp: -60,
              v1Adj: -3,
            },
          ],
        },
      ],
    },
    slopeCorrection: {
      dryRunway: {},
      wetRunway: {},
    },
  },
  b737800: {
    weightOperation: {
      maximumTaxiWeight: 70760,
      maximumTakeoffWeight: 70533,
      maximumLandingWeight: 65317,
      maximumZeroFuelWeight: 61688,
    },
    baseVSpeeds: {
      flap1: [
        {
          weigth: 90,
          v1: 169,
          vr: 171,
          v2: 175,
        },
        {
          weigth: 85,
          v1: 163,
          vr: 166,
          v2: 171,
        },
        {
          weigth: 80,
          v1: 158,
          vr: 160,
          v2: 167,
        },
        {
          weigth: 75,
          v1: 153,
          vr: 155,
          v2: 162,
        },
        {
          weigth: 70,
          v1: 147,
          vr: 149,
          v2: 158,
        },
        {
          weigth: 65,
          v1: 141,
          vr: 143,
          v2: 153,
        },
        {
          weigth: 60,
          v1: 135,
          vr: 136,
          v2: 148,
        },
        {
          weigth: 55,
          v1: 128,
          vr: 129,
          v2: 143,
        },
        {
          weigth: 50,
          v1: 121,
          vr: 122,
          v2: 137,
        },
        {
          weigth: 45,
          v1: 113,
          vr: 114,
          v2: 131,
        },
        {
          weigth: 40,
          v1: 105,
          vr: 106,
          v2: 125,
        },
      ],
      flap5: [
        {
          weigth: 90,
          v1: 161,
          vr: 163,
          v2: 168,
        },
        {
          weigth: 85,
          v1: 157,
          vr: 159,
          v2: 164,
        },
        {
          weigth: 80,
          v1: 152,
          vr: 154,
          v2: 160,
        },
        {
          weigth: 75,
          v1: 147,
          vr: 148,
          v2: 156,
        },
        {
          weigth: 70,
          v1: 141,
          vr: 143,
          v2: 152,
        },
        {
          weigth: 65,
          v1: 135,
          vr: 137,
          v2: 147,
        },
        {
          weigth: 60,
          v1: 129,
          vr: 131,
          v2: 143,
        },
        {
          weigth: 55,
          v1: 123,
          vr: 124,
          v2: 137,
        },
        {
          weigth: 50,
          v1: 116,
          vr: 117,
          v2: 132,
        },
        {
          weigth: 45,
          v1: 109,
          vr: 110,
          v2: 126,
        },
        {
          weigth: 40,
          v1: 101,
          vr: 102,
          v2: 120,
        },
      ],
      flap10: [
        {
          weigth: 85,
          v1: 156,
          vr: 157,
          v2: 162,
        },
        {
          weigth: 80,
          v1: 151,
          vr: 152,
          v2: 158,
        },
        {
          weigth: 75,
          v1: 146,
          vr: 147,
          v2: 154,
        },
        {
          weigth: 70,
          v1: 140,
          vr: 141,
          v2: 150,
        },
        {
          weigth: 65,
          v1: 134,
          vr: 136,
          v2: 146,
        },
        {
          weigth: 60,
          v1: 128,
          vr: 129,
          v2: 141,
        },
        {
          weigth: 55,
          v1: 122,
          vr: 123,
          v2: 136,
        },
        {
          weigth: 50,
          v1: 115,
          vr: 116,
          v2: 130,
        },
        {
          weigth: 45,
          v1: 108,
          vr: 108,
          v2: 119,
        },
        {
          weigth: 40,
          v1: 100,
          vr: 101,
          v2: 119,
        },
      ],
      flap15: [
        {
          weigth: 80,
          v1: 148,
          vr: 149,
          v2: 155,
        },
        {
          weigth: 75,
          v1: 142,
          vr: 144,
          v2: 151,
        },
        {
          weigth: 70,
          v1: 137,
          vr: 138,
          v2: 147,
        },
        {
          weigth: 65,
          v1: 131,
          vr: 133,
          v2: 143,
        },
        {
          weigth: 60,
          v1: 125,
          vr: 126,
          v2: 138,
        },
        {
          weigth: 55,
          v1: 119,
          vr: 120,
          v2: 133,
        },
        {
          weigth: 50,
          v1: 112,
          vr: 113,
          v2: 128,
        },
        {
          weigth: 45,
          v1: 105,
          vr: 106,
          v2: 122,
        },
        {
          weigth: 40,
          v1: 98,
          vr: 99,
          v2: 177,
        },
      ],
      flap25: [
        {
          weigth: 80,
          v1: 145,
          vr: 146,
          v2: 153,
        },
        {
          weigth: 75,
          v1: 140,
          vr: 141,
          v2: 149,
        },
        {
          weigth: 70,
          v1: 135,
          vr: 136,
          v2: 145,
        },
        {
          weigth: 65,
          v1: 129,
          vr: 130,
          v2: 140,
        },
        {
          weigth: 60,
          v1: 123,
          vr: 124,
          v2: 136,
        },
        {
          weigth: 55,
          v1: 117,
          vr: 118,
          v2: 131,
        },
        {
          weigth: 50,
          v1: 110,
          vr: 111,
          v2: 126,
        },
        {
          weigth: 45,
          v1: 103,
          vr: 104,
          v2: 120,
        },
        {
          weigth: 40,
          v1: 96,
          vr: 97,
          v2: 115,
        },
      ],
    },
    vSpeedsAdjustments: {
      v1: [
        {
          // V1 Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: 5,
            },
            {
              temp: 60,
              v1Adj: 4,
            },
            {
              temp: 50,
              v1Adj: 2,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V1 Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: 6,
            },
            {
              temp: 60,
              v1Adj: 5,
            },
            {
              temp: 50,
              v1Adj: 3,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V1 Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 6,
            },
            {
              temp: 50,
              v1Adj: 4,
            },
            {
              temp: 40,
              v1Adj: 3,
            },
            {
              temp: 30,
              v1Adj: 1,
            },
            {
              temp: 20,
              v1Adj: 1,
            },
            {
              temp: -60,
              v1Adj: 1,
            },
          ],
        },
        {
          // V1 Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 7,
            },
            {
              temp: 50,
              v1Adj: 5,
            },
            {
              temp: 40,
              v1Adj: 4,
            },
            {
              temp: 30,
              v1Adj: 2,
            },
            {
              temp: 20,
              v1Adj: 2,
            },
            {
              temp: -60,
              v1Adj: 2,
            },
          ],
        },
        {
          // V1 Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 6,
            },
            {
              temp: 40,
              v1Adj: 5,
            },
            {
              temp: 30,
              v1Adj: 4,
            },
            {
              temp: 20,
              v1Adj: 3,
            },
            {
              temp: -60,
              v1Adj: 3,
            },
          ],
        },
        {
          // V1 Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 7,
            },
            {
              temp: 40,
              v1Adj: 6,
            },
            {
              temp: 30,
              v1Adj: 5,
            },
            {
              temp: 20,
              v1Adj: 4,
            },
            {
              temp: -60,
              v1Adj: 4,
            },
          ],
        },
        {
          // V1 Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 9,
            },
            {
              temp: 40,
              v1Adj: 7,
            },
            {
              temp: 30,
              v1Adj: 6,
            },
            {
              temp: 20,
              v1Adj: 5,
            },
            {
              temp: -60,
              v1Adj: 5,
            },
          ],
        },
      ],
      vr: [
        {
          // VR Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: 4,
            },
            {
              temp: 60,
              v1Adj: 3,
            },
            {
              temp: 50,
              v1Adj: 2,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // VR Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: 5,
            },
            {
              temp: 60,
              v1Adj: 4,
            },
            {
              temp: 50,
              v1Adj: 3,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // VR Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 5,
            },
            {
              temp: 50,
              v1Adj: 4,
            },
            {
              temp: 40,
              v1Adj: 3,
            },
            {
              temp: 30,
              v1Adj: 1,
            },
            {
              temp: 20,
              v1Adj: 1,
            },
            {
              temp: -60,
              v1Adj: 1,
            },
          ],
        },
        {
          // VR Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 6,
            },
            {
              temp: 50,
              v1Adj: 5,
            },
            {
              temp: 40,
              v1Adj: 4,
            },
            {
              temp: 30,
              v1Adj: 3,
            },
            {
              temp: 20,
              v1Adj: 2,
            },
            {
              temp: -60,
              v1Adj: 2,
            },
          ],
        },
        {
          // VR Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 6,
            },
            {
              temp: 40,
              v1Adj: 5,
            },
            {
              temp: 30,
              v1Adj: 4,
            },
            {
              temp: 20,
              v1Adj: 3,
            },
            {
              temp: -60,
              v1Adj: 3,
            },
          ],
        },
        {
          // VR Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 7,
            },
            {
              temp: 40,
              v1Adj: 6,
            },
            {
              temp: 30,
              v1Adj: 5,
            },
            {
              temp: 20,
              v1Adj: 4,
            },
            {
              temp: -60,
              v1Adj: 4,
            },
          ],
        },
        {
          // VR Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 8,
            },
            {
              temp: 40,
              v1Adj: 7,
            },
            {
              temp: 30,
              v1Adj: 6,
            },
            {
              temp: 20,
              v1Adj: 5,
            },
            {
              temp: -60,
              v1Adj: 5,
            },
          ],
        },
      ],
      v2: [
        {
          // V2 Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: -3,
            },
            {
              temp: 60,
              v1Adj: -2,
            },
            {
              temp: 50,
              v1Adj: -2,
            },
            {
              temp: 40,
              v1Adj: -1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V2 Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: -3,
            },
            {
              temp: 60,
              v1Adj: -3,
            },
            {
              temp: 50,
              v1Adj: -2,
            },
            {
              temp: 40,
              v1Adj: -1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V2 Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: -3,
            },
            {
              temp: 50,
              v1Adj: -3,
            },
            {
              temp: 40,
              v1Adj: -2,
            },
            {
              temp: 30,
              v1Adj: -1,
            },
            {
              temp: 20,
              v1Adj: -1,
            },
            {
              temp: -60,
              v1Adj: -1,
            },
          ],
        },
        {
          // V2 Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: -4,
            },
            {
              temp: 50,
              v1Adj: -3,
            },
            {
              temp: 40,
              v1Adj: -2,
            },
            {
              temp: 30,
              v1Adj: -2,
            },
            {
              temp: 20,
              v1Adj: -1,
            },
            {
              temp: -60,
              v1Adj: -1,
            },
          ],
        },
        {
          // V2 Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -4,
            },
            {
              temp: 40,
              v1Adj: -3,
            },
            {
              temp: 30,
              v1Adj: -2,
            },
            {
              temp: 20,
              v1Adj: -2,
            },
            {
              temp: -60,
              v1Adj: -2,
            },
          ],
        },
        {
          // V2 Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -5,
            },
            {
              temp: 40,
              v1Adj: -4,
            },
            {
              temp: 30,
              v1Adj: -3,
            },
            {
              temp: 20,
              v1Adj: -3,
            },
            {
              temp: -60,
              v1Adj: -2,
            },
          ],
        },
        {
          // V2 Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -6,
            },
            {
              temp: 40,
              v1Adj: -5,
            },
            {
              temp: 30,
              v1Adj: -4,
            },
            {
              temp: 20,
              v1Adj: -3,
            },
            {
              temp: -60,
              v1Adj: -3,
            },
          ],
        },
      ],
    },
  },
  b737900: {
    weightOperation: {
      maximumTaxiWeight: 79242,
      maximumTakeoffWeight: 79015,
      maximumLandingWeight: 66360,
      maximumZeroFuelWeight: 62731,
    },
    baseVSpeeds: {
      flap1: [
        {
          weigth: 90,
          v1: 169,
          vr: 171,
          v2: 175,
        },
        {
          weigth: 85,
          v1: 163,
          vr: 166,
          v2: 171,
        },
        {
          weigth: 80,
          v1: 158,
          vr: 160,
          v2: 167,
        },
        {
          weigth: 75,
          v1: 153,
          vr: 155,
          v2: 162,
        },
        {
          weigth: 70,
          v1: 147,
          vr: 149,
          v2: 158,
        },
        {
          weigth: 65,
          v1: 141,
          vr: 143,
          v2: 153,
        },
        {
          weigth: 60,
          v1: 135,
          vr: 136,
          v2: 148,
        },
        {
          weigth: 55,
          v1: 128,
          vr: 129,
          v2: 143,
        },
        {
          weigth: 50,
          v1: 121,
          vr: 122,
          v2: 137,
        },
        {
          weigth: 45,
          v1: 113,
          vr: 114,
          v2: 131,
        },
        {
          weigth: 40,
          v1: 105,
          vr: 106,
          v2: 125,
        },
      ],
      flap5: [
        {
          weigth: 90,
          v1: 161,
          vr: 163,
          v2: 168,
        },
        {
          weigth: 85,
          v1: 157,
          vr: 159,
          v2: 164,
        },
        {
          weigth: 80,
          v1: 152,
          vr: 154,
          v2: 160,
        },
        {
          weigth: 75,
          v1: 147,
          vr: 148,
          v2: 156,
        },
        {
          weigth: 70,
          v1: 141,
          vr: 143,
          v2: 152,
        },
        {
          weigth: 65,
          v1: 135,
          vr: 137,
          v2: 147,
        },
        {
          weigth: 60,
          v1: 129,
          vr: 131,
          v2: 143,
        },
        {
          weigth: 55,
          v1: 123,
          vr: 124,
          v2: 137,
        },
        {
          weigth: 50,
          v1: 116,
          vr: 117,
          v2: 132,
        },
        {
          weigth: 45,
          v1: 109,
          vr: 110,
          v2: 126,
        },
        {
          weigth: 40,
          v1: 101,
          vr: 102,
          v2: 120,
        },
      ],
      flap10: [
        {
          weigth: 85,
          v1: 156,
          vr: 157,
          v2: 162,
        },
        {
          weigth: 80,
          v1: 151,
          vr: 152,
          v2: 158,
        },
        {
          weigth: 75,
          v1: 146,
          vr: 147,
          v2: 154,
        },
        {
          weigth: 70,
          v1: 140,
          vr: 141,
          v2: 150,
        },
        {
          weigth: 65,
          v1: 134,
          vr: 136,
          v2: 146,
        },
        {
          weigth: 60,
          v1: 128,
          vr: 129,
          v2: 141,
        },
        {
          weigth: 55,
          v1: 122,
          vr: 123,
          v2: 136,
        },
        {
          weigth: 50,
          v1: 115,
          vr: 116,
          v2: 130,
        },
        {
          weigth: 45,
          v1: 108,
          vr: 108,
          v2: 119,
        },
        {
          weigth: 40,
          v1: 100,
          vr: 101,
          v2: 119,
        },
      ],
      flap15: [
        {
          weigth: 80,
          v1: 148,
          vr: 149,
          v2: 155,
        },
        {
          weigth: 75,
          v1: 142,
          vr: 144,
          v2: 151,
        },
        {
          weigth: 70,
          v1: 137,
          vr: 138,
          v2: 147,
        },
        {
          weigth: 65,
          v1: 131,
          vr: 133,
          v2: 143,
        },
        {
          weigth: 60,
          v1: 125,
          vr: 126,
          v2: 138,
        },
        {
          weigth: 55,
          v1: 119,
          vr: 120,
          v2: 133,
        },
        {
          weigth: 50,
          v1: 112,
          vr: 113,
          v2: 128,
        },
        {
          weigth: 45,
          v1: 105,
          vr: 106,
          v2: 122,
        },
        {
          weigth: 40,
          v1: 98,
          vr: 99,
          v2: 177,
        },
      ],
      flap25: [
        {
          weigth: 80,
          v1: 145,
          vr: 146,
          v2: 153,
        },
        {
          weigth: 75,
          v1: 140,
          vr: 141,
          v2: 149,
        },
        {
          weigth: 70,
          v1: 135,
          vr: 136,
          v2: 145,
        },
        {
          weigth: 65,
          v1: 129,
          vr: 130,
          v2: 140,
        },
        {
          weigth: 60,
          v1: 123,
          vr: 124,
          v2: 136,
        },
        {
          weigth: 55,
          v1: 117,
          vr: 118,
          v2: 131,
        },
        {
          weigth: 50,
          v1: 110,
          vr: 111,
          v2: 126,
        },
        {
          weigth: 45,
          v1: 103,
          vr: 104,
          v2: 120,
        },
        {
          weigth: 40,
          v1: 96,
          vr: 97,
          v2: 115,
        },
      ],
    },
    vSpeedsAdjustments: {
      v1: [
        {
          // V1 Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: 5,
            },
            {
              temp: 60,
              v1Adj: 4,
            },
            {
              temp: 50,
              v1Adj: 2,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V1 Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: 6,
            },
            {
              temp: 60,
              v1Adj: 5,
            },
            {
              temp: 50,
              v1Adj: 3,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V1 Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 6,
            },
            {
              temp: 50,
              v1Adj: 4,
            },
            {
              temp: 40,
              v1Adj: 3,
            },
            {
              temp: 30,
              v1Adj: 1,
            },
            {
              temp: 20,
              v1Adj: 1,
            },
            {
              temp: -60,
              v1Adj: 1,
            },
          ],
        },
        {
          // V1 Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 7,
            },
            {
              temp: 50,
              v1Adj: 5,
            },
            {
              temp: 40,
              v1Adj: 4,
            },
            {
              temp: 30,
              v1Adj: 2,
            },
            {
              temp: 20,
              v1Adj: 2,
            },
            {
              temp: -60,
              v1Adj: 2,
            },
          ],
        },
        {
          // V1 Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 6,
            },
            {
              temp: 40,
              v1Adj: 5,
            },
            {
              temp: 30,
              v1Adj: 4,
            },
            {
              temp: 20,
              v1Adj: 3,
            },
            {
              temp: -60,
              v1Adj: 3,
            },
          ],
        },
        {
          // V1 Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 7,
            },
            {
              temp: 40,
              v1Adj: 6,
            },
            {
              temp: 30,
              v1Adj: 5,
            },
            {
              temp: 20,
              v1Adj: 4,
            },
            {
              temp: -60,
              v1Adj: 4,
            },
          ],
        },
        {
          // V1 Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 9,
            },
            {
              temp: 40,
              v1Adj: 7,
            },
            {
              temp: 30,
              v1Adj: 6,
            },
            {
              temp: 20,
              v1Adj: 5,
            },
            {
              temp: -60,
              v1Adj: 5,
            },
          ],
        },
      ],
      vr: [
        {
          // VR Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: 4,
            },
            {
              temp: 60,
              v1Adj: 3,
            },
            {
              temp: 50,
              v1Adj: 2,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // VR Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: 5,
            },
            {
              temp: 60,
              v1Adj: 4,
            },
            {
              temp: 50,
              v1Adj: 3,
            },
            {
              temp: 40,
              v1Adj: 1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // VR Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 5,
            },
            {
              temp: 50,
              v1Adj: 4,
            },
            {
              temp: 40,
              v1Adj: 3,
            },
            {
              temp: 30,
              v1Adj: 1,
            },
            {
              temp: 20,
              v1Adj: 1,
            },
            {
              temp: -60,
              v1Adj: 1,
            },
          ],
        },
        {
          // VR Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: 6,
            },
            {
              temp: 50,
              v1Adj: 5,
            },
            {
              temp: 40,
              v1Adj: 4,
            },
            {
              temp: 30,
              v1Adj: 3,
            },
            {
              temp: 20,
              v1Adj: 2,
            },
            {
              temp: -60,
              v1Adj: 2,
            },
          ],
        },
        {
          // VR Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 6,
            },
            {
              temp: 40,
              v1Adj: 5,
            },
            {
              temp: 30,
              v1Adj: 4,
            },
            {
              temp: 20,
              v1Adj: 3,
            },
            {
              temp: -60,
              v1Adj: 3,
            },
          ],
        },
        {
          // VR Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 7,
            },
            {
              temp: 40,
              v1Adj: 6,
            },
            {
              temp: 30,
              v1Adj: 5,
            },
            {
              temp: 20,
              v1Adj: 4,
            },
            {
              temp: -60,
              v1Adj: 4,
            },
          ],
        },
        {
          // VR Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: 8,
            },
            {
              temp: 40,
              v1Adj: 7,
            },
            {
              temp: 30,
              v1Adj: 6,
            },
            {
              temp: 20,
              v1Adj: 5,
            },
            {
              temp: -60,
              v1Adj: 5,
            },
          ],
        },
      ],
      v2: [
        {
          // V2 Adjustments -2.000ft
          pressAlt: -2000,
          adjustments: [
            {
              temp: 70,
              v1Adj: -3,
            },
            {
              temp: 60,
              v1Adj: -2,
            },
            {
              temp: 50,
              v1Adj: -2,
            },
            {
              temp: 40,
              v1Adj: -1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V2 Adjustments 0ft
          pressAlt: 0,
          adjustments: [
            {
              temp: 70,
              v1Adj: -3,
            },
            {
              temp: 60,
              v1Adj: -3,
            },
            {
              temp: 50,
              v1Adj: -2,
            },
            {
              temp: 40,
              v1Adj: -1,
            },
            {
              temp: 30,
              v1Adj: 0,
            },
            {
              temp: 20,
              v1Adj: 0,
            },
            {
              temp: -60,
              v1Adj: 0,
            },
          ],
        },
        {
          // V2 Adjustments 2.000ft
          pressAlt: 2000,
          adjustments: [
            {
              temp: 60,
              v1Adj: -3,
            },
            {
              temp: 50,
              v1Adj: -3,
            },
            {
              temp: 40,
              v1Adj: -2,
            },
            {
              temp: 30,
              v1Adj: -1,
            },
            {
              temp: 20,
              v1Adj: -1,
            },
            {
              temp: -60,
              v1Adj: -1,
            },
          ],
        },
        {
          // V2 Adjustments 4.000ft
          pressAlt: 4000,
          adjustments: [
            {
              temp: 60,
              v1Adj: -4,
            },
            {
              temp: 50,
              v1Adj: -3,
            },
            {
              temp: 40,
              v1Adj: -2,
            },
            {
              temp: 30,
              v1Adj: -2,
            },
            {
              temp: 20,
              v1Adj: -1,
            },
            {
              temp: -60,
              v1Adj: -1,
            },
          ],
        },
        {
          // V2 Adjustments 6.000ft
          pressAlt: 6000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -4,
            },
            {
              temp: 40,
              v1Adj: -3,
            },
            {
              temp: 30,
              v1Adj: -2,
            },
            {
              temp: 20,
              v1Adj: -2,
            },
            {
              temp: -60,
              v1Adj: -2,
            },
          ],
        },
        {
          // V2 Adjustments 8.000ft
          pressAlt: 8000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -5,
            },
            {
              temp: 40,
              v1Adj: -4,
            },
            {
              temp: 30,
              v1Adj: -3,
            },
            {
              temp: 20,
              v1Adj: -3,
            },
            {
              temp: -60,
              v1Adj: -2,
            },
          ],
        },
        {
          // V2 Adjustments 10.000ft
          pressAlt: 10000,
          adjustments: [
            {
              temp: 50,
              v1Adj: -6,
            },
            {
              temp: 40,
              v1Adj: -5,
            },
            {
              temp: 30,
              v1Adj: -4,
            },
            {
              temp: 20,
              v1Adj: -3,
            },
            {
              temp: -60,
              v1Adj: -3,
            },
          ],
        },
      ],
    },
    slopeCorrection: {
      dryRunway: {},
      wetRunway: {},
    },
  },
};
const airbus = {
  a320: {},
};
export { boeing, airbus };
