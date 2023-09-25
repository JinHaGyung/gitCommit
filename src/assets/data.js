//차량 종류에 따라서 구분([]의 순번)
//차량의 컬러에 따라 구분([[],[],[]..]으로 구분)
//차향의 정,측,뒤 이미지 구분([[{}]]으로 구분)
//인테리어 내용(공용으로 넣기)

//LT자료
import Ain_driver from "./img/body/1/in_001_rs.jpg"
import Ain_full from "./img/body/1/in_002_rs.jpg"
//LT컬러
import A01_front from "./img/body/1/A01_1.png"
import A01_Side from "./img/body/1/A01_2.png"
import A01_Back from "./img/body/1/A01_3.png"

import A02_front from "./img/body/1/A02_1.png"
import A02_Side from "./img/body/1/A02_2.png"
import A02_Back from "./img/body/1/A02_3.png"

import A03_front from "./img/body/1/A03_1.png"
import A03_Side from "./img/body/1/A03_2.png"
import A03_Back from "./img/body/1/A03_3.png"

import A04_front from "./img/body/1/A04_1.png"
import A04_Side from "./img/body/1/A04_2.png"
import A04_Back from "./img/body/1/A04_3.png"

import A05_front from "./img/body/1/A05_1.png"
import A05_Side from "./img/body/1/A05_2.png"
import A05_Back from "./img/body/1/A05_3.png"

//ACTIV 자료
import Bin_driver from "./img/body/2/in_001_rs.jpg"
import Bin_full from "./img/body/2/in_002_rs.jpg"
//ACTIV컬러
import B01_front from "./img/body/2/B01_1.png"
import B01_Side from "./img/body/2/B01_2.png"
import B01_Back from "./img/body/2/B01_3.png"

import B02_front from "./img/body/2/B02_1.png"
import B02_Side from "./img/body/2/B02_2.png"
import B02_Back from "./img/body/2/B02_3.png"

import B03_front from "./img/body/2/B03_1.png"
import B03_Side from "./img/body/2/B03_2.png"
import B03_Back from "./img/body/2/B03_3.png"

import B04_front from "./img/body/2/B04_1.png"
import B04_Side from "./img/body/2/B04_2.png"
import B04_Back from "./img/body/2/B04_3.png"

import B05_front from "./img/body/2/B05_1.png"
import B05_Side from "./img/body/2/B05_2.png"
import B05_Back from "./img/body/2/B05_3.png"

import B06_front from "./img/body/2/B06_1.png"
import B06_Side from "./img/body/2/B06_2.png"
import B06_Back from "./img/body/2/B06_3.png"

//RS 자료
import Cin_driver from "./img/body/3/in_001_rs.jpg"
import Cin_full from "./img/body/3/in_002_rs.jpg"
//RS컬러
import C01_front from "./img/body/3/C01_1.png"
import C01_Side from "./img/body/3/C01_2.png"
import C01_Back from "./img/body/3/C01_3.png"

import C02_front from "./img/body/3/C02_1.png"
import C02_Side from "./img/body/3/C02_2.png"
import C02_Back from "./img/body/3/C02_3.png"

import C03_front from "./img/body/3/C03_1.png"
import C03_Side from "./img/body/3/C03_2.png"
import C03_Back from "./img/body/3/C03_3.png"

import C04_front from "./img/body/3/C04_1.png"
import C04_Side from "./img/body/3/C04_2.png"
import C04_Back from "./img/body/3/C04_3.png"

import C05_front from "./img/body/3/C05_1.png"
import C05_Side from "./img/body/3/C05_2.png"
import C05_Back from "./img/body/3/C05_3.png"

import C06_front from "./img/body/3/C06_1.png"
import C06_Side from "./img/body/3/C06_2.png"
import C06_Back from "./img/body/3/C06_3.png"

import C07_front from "./img/body/3/C07_1.png"
import C07_Side from "./img/body/3/C07_2.png"
import C07_Back from "./img/body/3/C07_3.png"

import C08_front from "./img/body/3/C08_1.png"
import C08_Side from "./img/body/3/C08_2.png"
import C08_Back from "./img/body/3/C08_3.png"

//PREMIER자료
import Din_driver from "./img/body/4/in_001_rs.jpg"
import Din_full from "./img/body/4/in_002_rs.jpg"
//PREMIER컬러
import D01_front from "./img/body/4/D01_1.png"
import D01_Side from "./img/body/4/D01_2.png"
import D01_Back from "./img/body/4/D01_3.png"

import D02_front from "./img/body/4/D02_1.png"
import D02_Side from "./img/body/4/D02_2.png"
import D02_Back from "./img/body/4/D02_3.png"

import D03_front from "./img/body/4/D03_1.png"
import D03_Side from "./img/body/4/D03_2.png"
import D03_Back from "./img/body/4/D03_3.png"

import D04_front from "./img/body/4/D04_1.png"
import D04_Side from "./img/body/4/D04_2.png"
import D04_Back from "./img/body/4/D04_3.png"

import D05_front from "./img/body/4/D05_1.png"
import D05_Side from "./img/body/4/D05_2.png"
import D05_Back from "./img/body/4/D05_3.png"


let data = [
  //LT
  [
    {
      front:A01_front,
      side:A01_Side,
      back:A01_Back,
      in_driver:Ain_driver,
      in_full:Ain_full
    },
    {
      front:A02_front,
      side:A02_Side,
      back:A02_Back,
      in_driver:Ain_driver,
      in_full:Ain_full
    },
    {
      front:A03_front,
      side:A03_Side,
      back:A03_Back,
      in_driver:Ain_driver,
      in_full:Ain_full
    },
    {
      front:A04_front,
      side:A04_Side,
      back:A04_Back,
      in_driver:Ain_driver,
      in_full:Ain_full
    },
    {
      front:A05_front,
      side:A05_Side,
      back:A05_Back,
      in_driver:Ain_driver,
      in_full:Ain_full
    }
  ],
    //PREMIER
    [
      {
        front:D01_front,
        side:D01_Side,
        back:D01_Back,
        in_driver:Din_driver,
        in_full:Din_full
      },
      {
        front:D02_front,
        side:D02_Side,
        back:D02_Back,
        in_driver:Din_driver,
        in_full:Din_full
      },
      {
        front:D03_front,
        side:D03_Side,
        back:D03_Back,
        in_driver:Din_driver,
        in_full:Din_full
      },
      {
        front:D04_front,
        side:D04_Side,
        back:D04_Back,
        in_driver:Din_driver,
        in_full:Din_full
      },
      {
        front:D05_front,
        side:D05_Side,
        back:D05_Back,
        in_driver:Din_driver,
        in_full:Din_full
      }
    ],
  //ACTIV
  [
    {
      front:B01_front,
      side:B01_Side,
      back:B01_Back,
      in_driver:Bin_driver,
      in_full:Bin_full
    },    
    {
      front:B02_front,
      side:B02_Side,
      back:B02_Back,
      in_driver:Bin_driver,
      in_full:Bin_full
    },
    {
      front:B03_front,
      side:B03_Side,
      back:B03_Back,
      in_driver:Bin_driver,
      in_full:Bin_full
    },
    {
      front:B04_front,
      side:B04_Side,
      back:B04_Back,
      in_driver:Bin_driver,
      in_full:Bin_full
    },
    {
      front:B05_front,
      side:B05_Side,
      back:B05_Back,
      in_driver:Bin_driver,
      in_full:Bin_full
    },
    {
      front:B06_front,
      side:B06_Side,
      back:B06_Back,
      in_driver:Bin_driver,
      in_full:Bin_full
    }
  ],
  //RS
  [
    {
      front:C01_front,
      side:C01_Side,
      back:C01_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    },    
    {
      front:C02_front,
      side:C02_Side,
      back:C02_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    },
    {
      front:C03_front,
      side:C03_Side,
      back:C03_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    },
    {
      front:C04_front,
      side:C04_Side,
      back:C04_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    },
    {
      front:C05_front,
      side:C05_Side,
      back:C05_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    },
    {
      front:C06_front,
      side:C06_Side,
      back:C06_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    },
    {
      front:C07_front,
      side:C07_Side,
      back:C07_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    },
    {
      front:C08_front,
      side:C08_Side,
      back:C08_Back,
      in_driver:Cin_driver,
      in_full:Cin_full
    }
  ],

]

export default data