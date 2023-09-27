//핫스팟 이미지 짤때 고려사항
//트림버전(O),인테리어 익스테리어 전환(o),정측후면 변경(o)
//트림별>샷별/트림별>인테리어 내부 드라이브 or 풀샷여부


//익스트림 팝업 디자인
import ex_001 from "../assets/img/modal/EX_001.png"
import ex_001_t from "../assets/img/modal/EX_001_T.png"
import ex_002 from "../assets/img/modal/EX_002.png"
import ex_002_t from "../assets/img/modal/EX_002_T.png"
import ex_006 from "../assets/img/modal/EX_006.png"
import ex_006_t from "../assets/img/modal/EX_006_T.png"
import ex_008_RS_AC from "../assets/img/modal/EX_008(RS_AC).png"
import ex_008_t from "../assets/img/modal/EX_008_T.png"
import ex_010 from "../assets/img/modal/EX_010.png"
import ex_010_t from "../assets/img/modal/EX_010_T.png"
import ex_013 from "../assets/img/modal/EX_013.png"
import ex_013_t from "../assets/img/modal/EX_013_T.png"
import ex_015 from "../assets/img/modal/EX_015(RS_AC).png"
import ex_015_t from "../assets/img/modal/EX_015_T(RS_AC).png"
import ex_016 from "../assets/img/modal/EX_016(RS&AC).png"
import ex_016_t from "../assets/img/modal/EX_016_T.png"
import ex_017 from "../assets/img/modal/EX_017(RS_AC_PR).png"
import ex_017_t from "../assets/img/modal/EX_017_T.png"
import ex_021 from "../assets/img/modal/EX_021.png"
import ex_021_t from "../assets/img/modal/EX_021_T.png"
import ex_023 from "../assets/img/modal/EX_023(RS_AC).png"
import ex_023_t from "../assets/img/modal/EX_023_T.png"
import ex_024 from "../assets/img/modal/EX_024(RS_AC).png"
import ex_024_t from "../assets/img/modal/EX_024_T.png"
import ex_026 from "../assets/img/modal/EX_026.png"
import ex_026_t from "../assets/img/modal/EX_026_T.png"
import ex_027 from "../assets/img/modal/EX_027(RS).png"
import ex_027_t from "../assets/img/modal/EX_027_T(RS).png"
import ex_028 from "../assets/img/modal/EX_028(AC).png"
import ex_028_t from "../assets/img/modal/EX_028_T(AC).png"


//인테리어
import in_003 from "../assets/img/modal/IN_003.png"
import in_003_t from "../assets/img/modal/IN_003_T.png"
import in_004 from "../assets/img/modal/IN_004.png"
import in_004_t from "../assets/img/modal/IN_004_T.png"
import in_005 from "../assets/img/modal/IN_005(AC_RS).png"
import in_005_t from "../assets/img/modal/IN_005_T.png"
import in_007 from "../assets/img/modal/IN_007.png"
import in_007_t from "../assets/img/modal/IN_007_T.png"
import in_009_ac from "../assets/img/modal/IN_009(AC)_02.png"
import in_009_ac_t from "../assets/img/modal/IN_009_T(AC).png"
import in_009_rs from "../assets/img/modal/IN_009(RS)_01.png"
import in_009_rs_t from "../assets/img/modal/IN_009_T(RS).png"
import in_011 from "../assets/img/modal/IN_011(RS_AC).png"
import in_011_t from "../assets/img/modal/IN_011_T(RS_AC).png"
import in_012_LT_PR from "../assets/img/modal/IN_012(LT_PR).png"
import in_012_RS_AC from "../assets/img/modal/IN_12(RS_AC).png"
import in_012_t from "../assets/img/modal/IN_012_T.png"
import in_014 from "../assets/img/modal/IN_014.png"
import in_014_t from "../assets/img/modal/IN_014_T.png"
import in_018 from "../assets/img/modal/IN_018(RS_AC).png"
import in_018_t from "../assets/img/modal/IN_018_T(RS_AC).png"
import in_019 from "../assets/img/modal/IN_019(RS_AC).png"
import in_019_t from "../assets/img/modal/IN_019_T(RS_AC).png"
import in_020 from "../assets/img/modal/IN_020.png"
import in_020_t from "../assets/img/modal/IN_020_T.png"
import in_022 from "../assets/img/modal/IN_022.png"
import in_022_t from "../assets/img/modal/IN_022_T.png"
import in_025 from "../assets/img/modal/IN_025.png"
import in_025_t from "../assets/img/modal/IN_025_T(RS_AC).png"
import in_029 from "../assets/img/modal/IN_029.png"
import in_029_t from "../assets/img/modal/IN_029_T.png"
import in_030 from "../assets/img/modal/IN_030.png"
import in_030_t from "../assets/img/modal/IN_030_T.png"

let hotspotdata=[
  //LT
  //css,설명,팝업내용(제목,컨텐츠)
  //전,측,후,드라이버,풀샷
  [
    {
      //LT정면
      css:["hotspot-1","hotspot-10","hotspot-13"],
      intro:["분리형 LED 헤드램프와 방향지시등","E-TURBO 엔진","액티브 에어로 셔터"],
      img:[{title:ex_001_t,cont:ex_001},{title:ex_010_t,cont:ex_010},{title:ex_013_t,cont:ex_013}]
    },
    {      
      //LT측면
      css:["hotspot-2","hotspot-6","hotspot-21","hotspot-24"],
      intro:["다양한 휠 디자인","전자 유압식 브레이크 시스템","어쿠스틱 윈드쉴드 글래스","캐릭터라인"],
      img:[{title:ex_002_t,cont:ex_002},{title:ex_006_t,cont:ex_006},{title:ex_021_t,cont:ex_021},{title:ex_024_t,cont:ex_024}]
    },
    {      
    //LT후면
      css:["hotspot-26"],
      intro:["스포티한 후면 디자인"],
      img:[{title:ex_026_t,cont:ex_026}]
    },
    {      
    //LT드라이브
      css:["hotspot-3","hotspot-4","hotspot-12","hotspot-22","hotspot-29"],
      intro:['11"컬러 터치스크린','8"컬러 클러스터',"자동변속기 (트랜스미션)","어댑티브 크루즈 컨트롤","무선 폰 프로젝션"
    ],
      img:[{title:in_003_t,cont:in_003},{title:in_004_t,cont:in_004},{title:in_012_t,cont:in_012_LT_PR},{title:in_022_t,cont:in_022},{title:in_029_t,cont:in_029}]
    },
    {      
      //LT풀샷
      css:["hotspot-7","hotspot-14","hotspot-20","hotspot-30"],
      intro:["다양한 시트 활용성","넉넉한 적재공간","다양한 수납공간","열선, 통풍 시트"
    ],
      img:[{title:in_007_t,cont:in_007},{title:in_014_t,cont:in_014},{title:in_020_t,cont:in_020},{title:in_030_t,cont:in_030}]
    }
  ],
  //PREMIER
  [
      {
        //PREMIER정면
        css:["hotspot-1","hotspot-10","hotspot-13"],
        intro:["분리형 LED 헤드램프와 방향지시등","E-TURBO 엔진","액티브 에어로 셔터"],
        img:[{title:ex_001_t,cont:ex_001},{title:ex_010_t,cont:ex_010},{title:ex_013_t,cont:ex_013}]
      },
      {      
        //PREMIER측면
        css:["hotspot-2","hotspot-6","hotspot-21","hotspot-24"],
        intro:["다양한 휠 디자인","전자 유압식 브레이크 시스템","어쿠스틱 윈드쉴드 글래스","캐릭터라인"],
        img:[{title:ex_002_t,cont:ex_002},{title:ex_006_t,cont:ex_006},{title:ex_021_t,cont:ex_021},{title:ex_024_t,cont:ex_024}]
      },
      {      
      //PREMIER후면
        css:["hotspot-16","hotspot-17","hotspot-26"],
        intro:["보타이 프로젝션 핸즈프리 파워 리프트게이트","파노라마 썬루프","스포티한 후면 디자인"],
        img:[{title:ex_016_t,cont:ex_016},{title:ex_017_t,cont:ex_017},{title:ex_026_t,cont:ex_026}]
      },
      {      
      //PREMIER드라이브
        css:["hotspot-3","hotspot-4","hotspot-12",
        "hotspot-22","hotspot-25","hotspot-29"],
        intro:['11"컬러 터치스크린','8"컬러 클러스터',"자동변속기 (트랜스미션)",
        "어댑티브 크루즈 컨트롤","BOSE® 프리미엄 오디오 시스템 (7 스피커)","무선 폰 프로젝션"
      ],
        img:[{title:in_003_t,cont:in_003},{title:in_004_t,cont:in_004},{title:in_012_t,cont:in_012_LT_PR},
         {title:in_022_t,cont:in_022}, {title:in_025_t,cont:in_025},{title:in_029_t,cont:in_029}]
      },
      {      
        //PREMIER풀샷
        css:["hotspot-7","hotspot-14","hotspot-20","hotspot-30"],
        intro:["다양한 시트 활용성","넉넉한 적재공간","다양한 수납공간","열선, 통풍 시트"
      ],
        img:[{title:in_007_t,cont:in_007},{title:in_014_t,cont:in_014},{title:in_020_t,cont:in_020},{title:in_030_t,cont:in_030}]
      }
  ],
  //ACTIV
  [
    {
      //ACTIV 정면
      css:["hotspot-1","hotspot-10","hotspot-13","hotspot-27"],
      intro:["분리형 LED 헤드램프와 방향지시등","E-TURBO 엔진","액티브 에어로 셔터","ACTIV전용 익스테리어"],
      img:[{title:ex_001_t,cont:ex_001},{title:ex_010_t,cont:ex_010},{title:ex_013_t,cont:ex_013},{title:ex_028_t,cont:ex_028}]
    },
    {      
      //ACTIV 측면
      css:["hotspot-2","hotspot-6","hotspot-21","hotspot-24"],
      intro:["다양한 휠 디자인","전자 유압식 브레이크 시스템","어쿠스틱 윈드쉴드 글래스","캐릭터라인"],
      img:[{title:ex_002_t,cont:ex_002},{title:ex_006_t,cont:ex_006},{title:ex_021_t,cont:ex_021},{title:ex_024_t,cont:ex_024}]
    },
    {      
    //ACTIV 후면
      css:["hotspot-8","hotspot-15","hotspot-16","hotspot-17","hotspot-23","hotspot-26"],
      intro:["투톤루프","Z-링크 서스펜션(Z-LINK SUSPENSION)","보타이 프로젝션 핸즈프리 파워 리프트게이트","파노라마 썬루프",
      "듀얼머플러","스포티한 후면 디자인"
    ],
      img:[{title:ex_008_t,cont:ex_008_RS_AC},{title:ex_015_t,cont:ex_015},{title:ex_016_t,cont:ex_016},{title:ex_017_t,cont:ex_017},
        {title:ex_023_t,cont:ex_023},{title:ex_026_t,cont:ex_026}]
    },
    {      
    //ACTIV 드라이브
      css:["hotspot-3","hotspot-4","hotspot-9","hotspot-11","hotspot-12","hotspot-18","hotspot-19",
      "hotspot-22","hotspot-25","hotspot-29"],
      intro:['11"컬러 터치스크린','8"컬러 클러스터',"ACTIV 인테리어","스위처블 AWD","자동변속기 (트랜스미션)",
      "USB포트와 스마트폰 무선충전 시스템","듀얼존 풀 오토 에어컨 (DUAL ZONE FULL AUTO A/C)",
      "어댑티브 크루즈 컨트롤","BOSE® 프리미엄 오디오 시스템 (7 스피커)","무선 폰 프로젝션"
    ],
      img:[{title:in_003_t,cont:in_003},{title:in_004_t,cont:in_004},{title:in_009_ac_t,cont:in_009_ac},{title:in_011_t,cont:in_011}
        ,{title:in_012_t,cont:in_012_RS_AC},{title:in_018_t,cont:in_018},{title:in_019_t,cont:in_019},
        {title:in_022_t,cont:in_022},{title:in_025_t,cont:in_025},{title:in_029_t,cont:in_029}]
    },
    {      
      //ACTIV 풀샷
      css:["hotspot-5","hotspot-7","hotspot-14","hotspot-20","hotspot-30"],
      intro:["액티브 노이즈 캔슬레이션(ANC, Active Noise Cancellation)","다양한 시트 활용성","넉넉한 적재공간","다양한 수납공간","열선, 통풍 시트"
    ],
      img:[{title:in_005_t,cont:in_005},{title:in_007_t,cont:in_007},{title:in_014_t,cont:in_014},{title:in_020_t,cont:in_020},{title:in_030_t,cont:in_030}]
    }
  ],
  //RS
  [
    {
      //RS정면
      css:["hotspot-1","hotspot-10","hotspot-13","hotspot-27"],
      intro:["분리형 LED 헤드램프와 방향지시등","E-TURBO 엔진","액티브 에어로 셔터","RS전용 익스테리어"],
      img:[{title:ex_001_t,cont:ex_001},{title:ex_010_t,cont:ex_010},{title:ex_013_t,cont:ex_013},{title:ex_027_t,cont:ex_027}]
    },
    {      
      //RS측면
      css:["hotspot-2","hotspot-6","hotspot-21","hotspot-24"],
      intro:["다양한 휠 디자인","전자 유압식 브레이크 시스템","어쿠스틱 윈드쉴드 글래스","캐릭터라인"],
      img:[{title:ex_002_t,cont:ex_002},{title:ex_006_t,cont:ex_006},{title:ex_021_t,cont:ex_021},{title:ex_024_t,cont:ex_024}]
    },
    {      
    //RS후면
      css:["hotspot-8","hotspot-15","hotspot-16","hotspot-17","hotspot-23","hotspot-26"],
      intro:["투톤루프","Z-링크 서스펜션(Z-LINK SUSPENSION)","보타이 프로젝션 핸즈프리 파워 리프트게이트","파노라마 썬루프",
      "듀얼머플러","스포티한 후면 디자인"
    ],
      img:[{title:ex_008_t,cont:ex_008_RS_AC},{title:ex_015_t,cont:ex_015},{title:ex_016_t,cont:ex_016},{title:ex_017_t,cont:ex_017},
        {title:ex_023_t,cont:ex_023},{title:ex_026_t,cont:ex_026}]
    },
    {      
    //RS드라이브
      css:["hotspot-3","hotspot-4","hotspot-9","hotspot-11","hotspot-12","hotspot-18",
      "hotspot-19","hotspot-22","hotspot-25","hotspot-29"],
      intro:['11"컬러 터치스크린','8"컬러 클러스터',"RS 인테리어","스위처블 AWD","자동변속기 (트랜스미션)","USB포트와 스마트폰 무선충전 시스템",
      "듀얼존 풀 오토 에어컨 (DUAL ZONE FULL AUTO A/C)","어댑티브 크루즈 컨트롤","BOSE® 프리미엄 오디오 시스템 (7 스피커)","무선 폰 프로젝션"
    ],
      img:[{title:in_003_t,cont:in_003},{title:in_004_t,cont:in_004},{title:in_009_rs_t,cont:in_009_rs},{title:in_011_t,cont:in_011}
        ,{title:in_012_t,cont:in_012_RS_AC},{title:in_018_t,cont:in_018},{title:in_019_t,cont:in_019},{title:in_022_t,cont:in_022},
        {title:in_025_t,cont:in_025},{title:in_029_t,cont:in_029}]
    },
    {      
      //RS풀샷
      css:["hotspot-5","hotspot-7","hotspot-14","hotspot-20","hotspot-30"],
      intro:["액티브 노이즈 캔슬레이션(ANC, Active Noise Cancellation)","다양한 시트 활용성","넉넉한 적재공간","다양한 수납공간","열선, 통풍 시트"
    ],
      img:[{title:in_005_t,cont:in_005},{title:in_007_t,cont:in_007},{title:in_014_t,cont:in_014},{title:in_020_t,cont:in_020},{title:in_030_t,cont:in_030}]
    }
  ],

]

export default hotspotdata