import { Injectable } from '@angular/core';
import { Productos } from './Productos';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  private dataProductos = [
    {
      "ID": "BBA20",
      "PRODUCTO": "BRAVO BABY 20 KGS",
      "MARCA": "BRAVO",
      "PESO": 20
    },
    {
      "ID": "BFC20",
      "PRODUCTO": "BRAVO FRANGO & CEREALES 20 KGS",
      "MARCA": "BRAVO",
      "PESO": 20
    },
    {
      "ID": "BFO20",
      "PRODUCTO": "BRAVO FORMULA  20 KGS",
      "MARCA": "BRAVO",
      "PESO": 20
    },
    {
      "ID": "COA22",
      "PRODUCTO": "CONNIE ADULTO 22 KG",
      "MARCA": "CONNIE",
      "PESO": 22
    },
    {
      "ID": "COC22",
      "PRODUCTO": "CONNIE CACHORRO 22 KG",
      "MARCA": "CONNIE",
      "PESO": 22
    },
    {
      "ID": "COG8",
      "PRODUCTO": "CONNIE GATO 8K",
      "MARCA": "CONNIE",
      "PESO": 8
    },
    {
      "ID": "DHI23",
      "PRODUCTO": "DIAMOND HI ENERGY 23 KGS",
      "MARCA": "DIAMOND",
      "PESO": 23
    },
    {
      "ID": "DMA23",
      "PRODUCTO": "DIAMOND MAINTENANCE  23 KGS",
      "MARCA": "DIAMOND",
      "PESO": 23
    },
    {
      "ID": "DPR23",
      "PRODUCTO": "DIAMOND PREMIUN 23 KGS",
      "MARCA": "DIAMOND",
      "PESO": 23
    },
    {
      "ID": "MXA15",
      "PRODUCTO": "MAXINE ADULTO 15 KG.",
      "MARCA": "MAXINE",
      "PESO": 15
    },
    {
      "ID": "MXA21",
      "PRODUCTO": "MAXINE ADULTO 21 KG.",
      "MARCA": "MAXINE",
      "PESO": 21
    },
    {
      "ID": "MXA22",
      "PRODUCTO": "MAXINE ADULTO 22,5 KG (3 sacos de 7,5k)",
      "MARCA": "MAXINE",
      "PESO": 22.5
    },
    {
      "ID": "MXA25",
      "PRODUCTO": "MAXINE ADULTO 25 KG.",
      "MARCA": "MAXINE",
      "PESO": 25
    },
    {
      "ID": "MXC15",
      "PRODUCTO": "MAXINE CACHORRO 15 KG.",
      "MARCA": "MAXINE",
      "PESO": 15
    },
    {
      "ID": "MXC21",
      "PRODUCTO": "MAXINE CACHORRO 21 KG.",
      "MARCA": "MAXINE",
      "PESO": 21
    },
    {
      "ID": "MXG3",
      "PRODUCTO": "MAXINE GATO 3 K",
      "MARCA": "MAXINE",
      "PESO": 3
    },
    {
      "ID": "MXG7",
      "PRODUCTO": "MAXINE GATO 7,5 KG",
      "MARCA": "MAXINE",
      "PESO": 7.5
    },
    {
      "ID": "MXS15",
      "PRODUCTO": "MAXINE SENIOR 15 KG.",
      "MARCA": "MAXINE",
      "PESO": 15
    },
    {
      "ID": "MXS21",
      "PRODUCTO": "MAXINE SENIOR 21 KG.",
      "MARCA": "MAXINE",
      "PESO": 21
    },
    {
      "ID": "WGA25",
      "PRODUCTO": "WITTS ADULTO GATO 25 KGS",
      "MARCA": "WITTS",
      "PESO": 25
    },
    {
      "ID": "WGA8",
      "PRODUCTO": "WITTS ADULTO GATO 8 KGS",
      "MARCA": "WITTS",
      "PESO": 8
    },
    {
      "ID": "WPA25",
      "PRODUCTO": "WITTS ADULTO PERRO 25 KGS",
      "MARCA": "WITTS",
      "PESO": 25
    },
    {
      "ID": "WPC25",
      "PRODUCTO": "WITTS CACHORRO PERRO 25 KGS",
      "MARCA": "WITTS",
      "PESO": 25
    },
    {
      "ID": "PGA3",
      "PRODUCTO": "PREY FORMULA ANGUS PARA GATO 2.7 K",
      "MARCA": "PREY",
      "PESO": 2.7
    },
    {
      "ID": "PGA7",
      "PRODUCTO": "PREY FORMULA ANGUS PARA GATO 6,8 K",
      "MARCA": "PREY",
      "PESO": 6.8
    },
    {
      "ID": "PGP3",
      "PRODUCTO": "PREY FORMULA TURKEY PARA GATO 2.7 K",
      "MARCA": "PREY",
      "PESO": 2.7
    },
    {
      "ID": "PGP7",
      "PRODUCTO": "PREY FORMULA TURKEY PARA GATO 6,8 K",
      "MARCA": "PREY",
      "PESO": 6.8
    },
    {
      "ID": "PPA12",
      "PRODUCTO": "PREY FORMULA ANGUS PARA PERRO 11.36 K",
      "MARCA": "PREY",
      "PESO": 11.3
    },
    {
      "ID": "PPA4",
      "PRODUCTO": "PREY FORMULA ANGUS PARA PERRO 3.6 K",
      "MARCA": "PREY",
      "PESO": 3.6
    },
    {
      "ID": "PPP12",
      "PRODUCTO": "PREY FORMULA TURKEY PARA PERRO 11.36 K",
      "MARCA": "PREY",
      "PESO": 11.3
    },
    {
      "ID": "PPP4",
      "PRODUCTO": "PREY FORMULA TURKEY PARA PERRO 3.6 K",
      "MARCA": "PREY",
      "PESO": 3.6
    },
    {
      "ID": "PPT12",
      "PRODUCTO": "PREY FORMULA TROUT PARA PERRO 11.36 K (TRUCHA)",
      "MARCA": "PREY",
      "PESO": 11.3
    },
    {
      "ID": "PPT4",
      "PRODUCTO": "PREY FORMULA TROUT PARA PERRO 3.6 K (TRUCHA)",
      "MARCA": "PREY",
      "PESO": 3.6
    },
    {
      "ID": "TGM2",
      "PRODUCTO": "TOW ROCKY MTM FELINE 2 K (venado)",
      "MARCA": "TOW",
      "PESO": 2
    },
    {
      "ID": "TGM7",
      "PRODUCTO": "TOW 7 ROCKY MTM FELINE 7K (VENADO)",
      "MARCA": "TOW",
      "PESO": 7
    },
    {
      "ID": "TGR2",
      "PRODUCTO": "TOW CANYON RIVER FELINE 2 K 8trucha)",
      "MARCA": "TOW",
      "PESO": 2
    },
    {
      "ID": "TGR7",
      "PRODUCTO": "TOW 7 CANYON RIVER FELINE 7K (TRUCHA)",
      "MARCA": "TOW",
      "PESO": 7
    },
    {
      "ID": "TGL7",
      "PRODUCTO": "TOW LOWLAND CREEK FELINE 6.6 Kg (PATO)",
      "MARCA": "TOW",
      "PESO": 6.6
    },
    {
      "ID": "TGL2",
      "PRODUCTO": "TOW TOW LOWLAND CREEK FELINE 2 Kg (PATO)",
      "MARCA": "TOW",
      "PESO": 2
    },
    {
      "ID": "TPA13",
      "PRODUCTO": "TOW PACIFIC STREAM ADULT (SALMON) 12,2K",
      "MARCA": "TOW",
      "PESO": 12.2
    },
    {
      "ID": "TPA2",
      "PRODUCTO": "TOW PACIFIC STREAM ADULT (SALMON) 2K",
      "MARCA": "TOW",
      "PESO": 2
    },
    {
      "ID": "TPA6",
      "PRODUCTO": "TOW PACIFIC STREAM ADULT (SALMON) 5,6K",
      "MARCA": "TOW",
      "PESO": 5.6
    },
    {
      "ID": "TPC13",
      "PRODUCTO": "TOW PACIFIC STREAM PUPY (SALMON) 12,2K",
      "MARCA": "TOW",
      "PESO": 12.2
    },
    {
      "ID": "TPC2",
      "PRODUCTO": "TOW PACIFIC STREAM PUPY (SALMON) 2K",
      "MARCA": "TOW",
      "PESO": 2
    },
    {
      "ID": "TPC6",
      "PRODUCTO": "TOW PACIFIC STREAM PUPY (SALMON) 5,6K",
      "MARCA": "TOW",
      "PESO": 5.6
    },
    {
      "ID": "TWA13",
      "PRODUCTO": "TOW WETLAND CANINE  ADULT (PATO) 12,2K",
      "MARCA": "TOW",
      "PESO": 12.2
    },
    {
      "ID": "TWA2",
      "PRODUCTO": "TOW WETLAND CANINE  ADULT (PATO) 2K",
      "MARCA": "TOW",
      "PESO": 2
    },
    {
      "ID": "TWA6",
      "PRODUCTO": "TOW WETLAND CANINE  ADULT (PATO) 5,6K",
      "MARCA": "TOW",
      "PESO": 5.6
    },
    {
      "ID": "NGA3",
      "PRODUCTO": "NUTRA GOLD ADULT 3 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGA15",
      "PRODUCTO": "NUTRA GOLD ADULT 15 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 15
    },
    {
      "ID": "NGAL15",
      "PRODUCTO": "NUTRA GOLD LARGE BREED ADULT DOG 15 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 15
    },
    {
      "ID": "NGAS3",
      "PRODUCTO": "NUTRA GOLD INDOOR ADULT DOG MICROBITES 3 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGAS7",
      "PRODUCTO": "NUTRA GOLD INDOOR ADULT DOG MICROBITES 7 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 7
    },
    {
      "ID": "NGB20",
      "PRODUCTO": "NUTRA GOLD BREEDER 20 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 20
    },
    {
      "ID": "NGCA1",
      "PRODUCTO": "NUTRA GOLD INDOOR ADULT CAT 1K",
      "MARCA": "NUTRA GOLD",
      "PESO": 1
    },
    {
      "ID": "NGCA3",
      "PRODUCTO": "NUTRA GOLD INDOOR ADULT CAT 3K",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGCA7",
      "PRODUCTO": "NUTRA GOLD INDOOR ADULT CAT 7K",
      "MARCA": "NUTRA GOLD",
      "PESO": 7
    },
    {
      "ID": "NGCF1",
      "PRODUCTO": "NUTRA GOLD FINICKY CAT 1K",
      "MARCA": "NUTRA GOLD",
      "PESO": 1
    },
    {
      "ID": "NGCF3",
      "PRODUCTO": "NUTRA GOLD FINICKY CAT 3K",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGCF7",
      "PRODUCTO": "NUTRA GOLD FINICKY CAT 7K",
      "MARCA": "NUTRA GOLD",
      "PESO": 7
    },
    {
      "ID": "NGCK1",
      "PRODUCTO": "NUTRA GOLD INDOOR KITTEN CAT 1K",
      "MARCA": "NUTRA GOLD",
      "PESO": 1
    },
    {
      "ID": "NGCK3",
      "PRODUCTO": "NUTRA GOLD INDOOR KITTEN CAT 3K",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGCS3",
      "PRODUCTO": "NUTRA GOLD H SENIOR  CAT 3K",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGCS7",
      "PRODUCTO": "NUTRA GOLD H SENIOR  CAT 7K",
      "MARCA": "NUTRA GOLD",
      "PESO": 7
    },
    {
      "ID": "NGD14",
      "PRODUCTO": "NUTRA GOLD DUCK 14K",
      "MARCA": "NUTRA GOLD",
      "PESO": 14
    },
    {
      "ID": "NGD2",
      "PRODUCTO": "NUTRA GOLD DUCK 2K",
      "MARCA": "NUTRA GOLD",
      "PESO": 2
    },
    {
      "ID": "NGDS15",
      "PRODUCTO": "NUTRA GOLD DOG  SENIOR  15K",
      "MARCA": "NUTRA GOLD",
      "PESO": 15
    },
    {
      "ID": "NGDS3",
      "PRODUCTO": "NUTRA GOLD DOG  SENIOR  3K",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGP15",
      "PRODUCTO": "NUTRA GOLD PUPPY 15 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 15
    },
    {
      "ID": "NGP3",
      "PRODUCTO": "NUTRA GOLD PUPY 3 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGPL15",
      "PRODUCTO": "NUTRA GOLD PUPPY LARGE 15 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 15
    },
    {
      "ID": "NGPL3",
      "PRODUCTO": "NUTRA GOLD PUPPY LARGE 3 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGPL7",
      "PRODUCTO": "NUTRA GOLD PUPPY LARGE 7 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 7
    },
    {
      "ID": "NGPS15",
      "PRODUCTO": "NUTRA GOLD PUPPY MICROBITES 15 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 15
    },
    {
      "ID": "NGPS3",
      "PRODUCTO": "NUTRA GOLD PUPPY MICROBITES 3 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGPS7",
      "PRODUCTO": "NUTRA GOLD PUPPY MICROBITES 7 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 7
    },
    {
      "ID": "NGS15",
      "PRODUCTO": "NUTRA GOLD SALMON 15 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 15
    },
    {
      "ID": "NGS3",
      "PRODUCTO": "NUTRA GOLD SALMON 3 KGS",
      "MARCA": "NUTRA GOLD",
      "PESO": 3
    },
    {
      "ID": "NGT14",
      "PRODUCTO": "NUTRA GOLD  TURKEY 14K",
      "MARCA": "NUTRA GOLD",
      "PESO": 14
    },
    {
      "ID": "NGT2",
      "PRODUCTO": "NUTRA GOLD  TURKEY 2K",
      "MARCA": "NUTRA GOLD",
      "PESO": 2
    },
    {
      "ID": "NGW14",
      "PRODUCTO": "NUTRA GOLD WHITEFISH 14K",
      "MARCA": "NUTRA GOLD",
      "PESO": 14
    },
    {
      "ID": "NGW2",
      "PRODUCTO": "NUTRA GOLD WHITEFISH 2K",
      "MARCA": "NUTRA GOLD",
      "PESO": 2
    },
    {
      "ID": "NAL15",
      "PRODUCTO": "NUTRA NUGGETS ADULT LARGE BREED 15 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 15
    },
    {
      "ID": "NAL18",
      "PRODUCTO": "NUTRA NUGGETS ADULT LARGE BREED 18 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 18
    },
    {
      "ID": "NAL3",
      "PRODUCTO": "NUTRA NUGGETS ADULT LARGE BREED 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NCM3",
      "PRODUCTO": "NUTRA NUGGETS MAINTENANCE CAT 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NCM7",
      "PRODUCTO": "NUTRA NUGGETS MANTENANCE  CAT 7 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 7
    },
    {
      "ID": "NCP3",
      "PRODUCTO": "NUTRA NUGGETS PROFESSIONAL CAT 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NCP7",
      "PRODUCTO": "NUTRA NUGGETS PROFESSIONAL  CAT 7 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 7
    },
    {
      "ID": "NLI15",
      "PRODUCTO": "NUTRA NUGGETS LITE/SENIOR 15 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 15
    },
    {
      "ID": "NLI3",
      "PRODUCTO": "NUTRA NUGGETS LITE/SENIOR 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NLI7",
      "PRODUCTO": "NUTRA NUGGETS LITE/SENIOR 7,5 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 7.5
    },
    {
      "ID": "NMA15",
      "PRODUCTO": "NUTRA NUGGETS MAINTENANCE 15 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 15
    },
    {
      "ID": "NMA18",
      "PRODUCTO": "NUTRA NUGGETS MAINTENANCE 18 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 18
    },
    {
      "ID": "NMA3",
      "PRODUCTO": "NUTRA NUGGETS MAINTENANCE 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NMA7",
      "PRODUCTO": "NUTRA NUGGETS MAINTENANCE 7,5 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 7.5
    },
    {
      "ID": "NPE15",
      "PRODUCTO": "NUTRA NUGGETS PERFORMANCE 15 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 15
    },
    {
      "ID": "NPE18",
      "PRODUCTO": "NUTRA NUGGETS PERFORMANCE 18 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 18
    },
    {
      "ID": "NPE3",
      "PRODUCTO": "NUTRA NUGGETS PERFORMANCE 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NPE7",
      "PRODUCTO": "NUTRA NUGGETS PERFORMANCE 7,5 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 7.5
    },
    {
      "ID": "NPL15",
      "PRODUCTO": "NUTRA NUGGETS PUPPY LARGE BREED 15 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 15
    },
    {
      "ID": "NPL3",
      "PRODUCTO": "NUTRA NUGGETS PUPPY LARGE BREED 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NPR15",
      "PRODUCTO": "NUTRA NUGGETS PROFESSIONAL 15 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 15
    },
    {
      "ID": "NPR3",
      "PRODUCTO": "NUTRA NUGGETS PROFESSIONAL 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NPR7",
      "PRODUCTO": "NUTRA NUGGETS PROFESSIONAL 7,5 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 7.5
    },
    {
      "ID": "NPU15",
      "PRODUCTO": "NUTRA NUGGETS PUPPY 15 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 15
    },
    {
      "ID": "NPU3",
      "PRODUCTO": "NUTRA NUGGETS PUPPY 3 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 3
    },
    {
      "ID": "NPU7",
      "PRODUCTO": "NUTRA NUGGETS PUPPY 7,5 KGS",
      "MARCA": "NUTRA NUGGETS",
      "PESO": 7.5
    },
    {
      "ID": "PS45",
      "PRODUCTO": "SABANILLA PARA PERROS 45*60 CM 10 U",
      "MARCA": "SABANILLA",
      "PESO": 45
    },
    {
      "ID": "PS60",
      "PRODUCTO": "SABANILLA PARA PERROS 60*60 CM 10 U",
      "MARCA": "SABANILLA",
      "PESO": 60
    },
    {
      "ID": "PS90",
      "PRODUCTO": "SABANILLA PARA PERROS 90*60 CM 10 U",
      "MARCA": "SABANILLA",
      "PESO": 9
    },
    {
      "ID": "ECOCO",
      "PRODUCTO": "ARENA SANITARIA  ECO CLEAN TOFU MAIZ 2.8K",
      "MARCA": "ARENA ECO CLEAN",
      "PESO": 2.8
    },
    {
      "ID": "ECOGT",
      "PRODUCTO": "ARENA SANITARIA  ECO CLEAN TOFU TE VERDE 2.8K",
      "MARCA": "ARENA ECO CLEAN",
      "PESO": 2.8
    },
    {
      "ID": "ECOOR",
      "PRODUCTO": "ARENA SANITARIA  ECO CLEAN TOFU 2.8K",
      "MARCA": "ARENA ECO CLEAN",
      "PESO": 2.8
    },
    {
      "ID": "MC2",
      "PRODUCTO": "ARENA SANITARIA MINE CAT 2 KGS",
      "MARCA": "ARENA MINE",
      "PESO": 2
    },
    {
      "ID": "NEO10",
      "PRODUCTO": "ARENA SANITARIA NEO CLEAN SCOOP 8.3 K (3u)",
      "MARCA": "ARENA NEON CLEAN",
      "PESO": 8.3
    },
    {
      "ID": "NEO5",
      "PRODUCTO": "ARENA SANITARIA NEO CLEAN SCOOP 4.15 K (4u)",
      "MARCA": "ARENA NEON CLEAN",
      "PESO": 4.15
    },
    {
      "ID": "NEON10",
      "PRODUCTO": "ARENA SANITARIA NEO CLEAN 8,5 KILOS (ROMEO)",
      "MARCA": "ARENA NEON CLEAN",
      "PESO": 8.5
    },
    {
      "ID": "NEON5",
      "PRODUCTO": "ARENA SANITARIA NEO CLEAN 5 KILOS (ROMEO)",
      "MARCA": "ARENA NEON CLEAN",
      "PESO": 5
    },
    {
      "ID": "ROY10",
      "PRODUCTO": "ARENA SANITARIA  ROYAL CAT  10 KG BOLSA (2)",
      "MARCA": "ARENA ROYAL CAT",
      "PESO": 10
    },
    {
      "ID": "ROY5",
      "PRODUCTO": "ARENA SANITARIA  ROYAL CAT  5KG BOLSA",
      "MARCA": "ARENA ROYAL CAT",
      "PESO": 5
    }
  ]

  constructor(private http: HttpClient) {

   }

   getProductos() {
     return this.dataProductos
   }

}
