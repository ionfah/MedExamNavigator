import { LinkItem } from "@/components/SidebarCategory";

interface SidebarCategory {
  name: string;
  links: LinkItem[];
  color: string; // Adăugăm culoare pentru fiecare categorie
  slug: string; // Adăugăm un slug pentru rutare
}

export const sidebarCategories: SidebarCategory[] = [
  {
    name: "Cardiologie",
    slug: "cardiologie",
    color: "#5d9cec", // Albastru deschis
    links: [
      {
        url: "https://onlinetestpad.com/pwb4pf6pkfdlu",
        text: "Cardiologie 1-50",
      },
      {
        url: "https://onlinetestpad.com/ksr6lqgv4qp3w",
        text: "Cardiologie 51-100",
      },
      {
        url: "https://onlinetestpad.com/sbfn3chocsyvk",
        text: "Cardiologie 101-150",
      },
      {
        url: "https://onlinetestpad.com/gjkyuxqszat4k",
        text: "Cardiologie 151-200",
      },
      {
        url: "https://onlinetestpad.com/kvhhxjq66phi6",
        text: "Cardiologie 201-250",
      },
      {
        url: "https://onlinetestpad.com/gyjomjpen3kvk",
        text: "Cardiologie 251-300",
      },
      {
        url: "https://onlinetestpad.com/r57yzj4l34r4o",
        text: "Cardiologie 301-350",
      },
      {
        url: "https://onlinetestpad.com/qxjdau2qcuh4s",
        text: "Cardiologie 351-400",
      },
      {
        url: "https://onlinetestpad.com/v4uoo7xkqkqmc",
        text: "Cardiologie 401-450",
      },
      {
        url: "https://onlinetestpad.com/mrmdcjfz22p2e",
        text: "Cardiologie 451 +",
      },
      {
        url: "https://onlinetestpad.com/srjek4actyiew",
        text: "Cardiologie Toate",
      },
    ],
  },
  {
    name: "Chirurgie pediatrică",
    slug: "chirurgie-pediatrica",
    color: "#4fc1e9", // Albastru pal
    links: [
      {
        url: "https://onlinetestpad.com/s3bl4tj4qwera",
        text: "Chirurgie pediatrică 1-50",
      },
      {
        url: "https://onlinetestpad.com/aigpryvr5myew",
        text: "Chirurgie pediatrică 51-100",
      },
      {
        url: "https://onlinetestpad.com/o7vqilwmpqv6c",
        text: "Chirurgie pediatrică 101 +",
      },
      {
        url: "https://onlinetestpad.com/gh3m5kma6xtem",
        text: "Chirurgie pediatrică Toate",
      },
    ],
  },
  {
    name: "Chirurgie generală semiologie (nr.3)",
    slug: "chirurgie-generala-semiologie",
    color: "#ac92ec", // Lavandă
    links: [
      {
        url: "https://onlinetestpad.com/d2xrtupw6obiq",
        text: "Chirurgie generală 1-50",
      },
      {
        url: "https://onlinetestpad.com/iaxlfw57vs2ju",
        text: "Chirurgie generală 51-100",
      },
      {
        url: "https://onlinetestpad.com/ejnldw4x5g3la",
        text: "Chirurgie generală 101 +",
      },
      {
        url: "https://onlinetestpad.com/d6onh6wv5ttpg",
        text: "Chirurgie generală Toate",
      },
    ],
  },
  {
    name: "Chirurgie nr.1",
    slug: "chirurgie-nr1",
    color: "#a0d468", // Verde deschis
    links: [
      {
        url: "https://onlinetestpad.com/sizflgbanpmqi",
        text: "Chirurgie nr.1 1-50",
      },
      {
        url: "https://onlinetestpad.com/thnfpuvvme46i",
        text: "Chirurgie nr.1 51-100",
      },
      {
        url: "https://onlinetestpad.com/533sm2yb5r5jw",
        text: "Chirurgie nr.1 101-150",
      },
      {
        url: "https://onlinetestpad.com/vvyc5nayaivws",
        text: "Chirurgie nr.1 151-200",
      },
      {
        url: "https://onlinetestpad.com/ub7mnq4rcfgcg",
        text: "Chirurgie nr.1 201 +",
      },
      {
        url: "https://onlinetestpad.com/twshwif7ietha",
        text: "Chirurgie nr.1 Toate",
      },
    ],
  },
  {
    name: "Chirurgie nr.2",
    slug: "chirurgie-nr2",
    color: "#48cfad", // Mentă
    links: [
      {
        url: "https://onlinetestpad.com/mmej2kmmhpswq",
        text: "Chirurgie nr.2 1-50",
      },
      {
        url: "https://onlinetestpad.com/tiqjwaxo5geue",
        text: "Chirurgie nr.2 51-100",
      },
      {
        url: "https://onlinetestpad.com/2xt6ff25cfhhq",
        text: "Chirurgie nr.2 101-150",
      },
      {
        url: "https://onlinetestpad.com/vu3keouudaz6m",
        text: "Chirurgie nr.2 151-200",
      },
      {
        url: "https://onlinetestpad.com/3khctur2dtz4o",
        text: "Chirurgie nr.2 201-250",
      },
      {
        url: "https://onlinetestpad.com/acgdo37rvc5e2",
        text: "Chirurgie nr.2 251 +",
      },
      {
        url: "https://onlinetestpad.com/km5fv7zhphcz4",
        text: "Chirurgie nr.2 Toate",
      },
    ],
  },
  {
    name: "Gastroenterologie",
    slug: "gastroenterologie",
    color: "#ffce54", // Galben
    links: [
      {
        url: "https://onlinetestpad.com/lo7syzaol3nbc",
        text: "Gastroenterologie 1-50",
      },
      {
        url: "https://onlinetestpad.com/wf5ecbk6aqkfe",
        text: "Gastroenterologie 51-100",
      },
      {
        url: "https://onlinetestpad.com/ms47rxcitksk2",
        text: "Gastroenterologie 101-150",
      },
      {
        url: "https://onlinetestpad.com/7twptuqkhoxo6",
        text: "Gastroenterologie 151-200",
      },
      {
        url: "https://onlinetestpad.com/6y3na7mlbwdd4",
        text: "Gastroenterologie 201-250",
      },
      {
        url: "https://onlinetestpad.com/yqqtpzboa3yic",
        text: "Gastroenterologie 251-300",
      },
      {
        url: "https://onlinetestpad.com/jawtqz6qxqoem",
        text: "Gastroenterologie 301-350",
      },
      {
        url: "https://onlinetestpad.com/762vzsxeghf5c",
        text: "Gastroenterologie 351-400",
      },
      {
        url: "https://onlinetestpad.com/hf5kkubpbdno2",
        text: "Gastroenterologie 401 +",
      },
      {
        url: "https://onlinetestpad.com/erqoe2zbs4fya",
        text: "Gastroenterologie Toate",
      },
    ],
  },
  {
    name: "Nefrologie",
    slug: "nefrologie",
    color: "#ed5565", // Roșu pal
    links: [
      {
        url: "https://onlinetestpad.com/6npivcyecdmzi",
        text: "Nefrologie 1-50",
      },
      {
        url: "https://onlinetestpad.com/pkbwlksq3cmhu",
        text: "Nefrologie 51-100",
      },
      {
        url: "https://onlinetestpad.com/gfnalr4m5vrlm",
        text: "Nefrologie 101-150",
      },
      {
        url: "https://onlinetestpad.com/syuaz2sj7r26c",
        text: "Nefrologie 151-200",
      },
      {
        url: "https://onlinetestpad.com/l5o27mwex3akg",
        text: "Nefrologie 201 +",
      },
      {
        url: "https://onlinetestpad.com/3gipcwf3uubcs",
        text: "Nefrologie Toate",
      },
    ],
  },
  {
    name: "Obstetrică și ginecologie",
    slug: "obstetrica-ginecologie",
    color: "#e84393", // Roz
    links: [
      {
        url: "https://onlinetestpad.com/xjdm6r5ztoxb4",
        text: "Obstetrică și ginecologie 1-50",
      },
      {
        url: "https://onlinetestpad.com/qtcv32katqarm",
        text: "Obstetrică și ginecologie 51-100",
      },
      {
        url: "https://onlinetestpad.com/lyxkawdltacso",
        text: "Obstetrică și ginecologie 101-150",
      },
      {
        url: "https://onlinetestpad.com/qdb54gxa6phzo",
        text: "Obstetrică și ginecologie 151-200",
      },
      {
        url: "https://onlinetestpad.com/5tc3ym4fgk6kw",
        text: "Obstetrică și ginecologie 201-250",
      },
      {
        url: "https://onlinetestpad.com/csi5vhz7nqupw",
        text: "Obstetrică și ginecologie 251-300",
      },
      {
        url: "https://onlinetestpad.com/6bmmadvtujjdg",
        text: "Obstetrică și ginecologie 301-350",
      },
      {
        url: "https://onlinetestpad.com/h5q5vxe45ndt2",
        text: "Obstetrică și ginecologie 351-400",
      },
      {
        url: "https://onlinetestpad.com/gxdy4pwvlxurk",
        text: "Obstetrică și ginecologie 401 +",
      },
      {
        url: "https://onlinetestpad.com/b3mkgsfx6piew",
        text: "Obstetrică și ginecologie Toate",
      },
    ],
  },
  {
    name: "Pediatrie",
    slug: "pediatrie",
    color: "#00b894", // Verde deschis
    links: [
      {
        url: "https://onlinetestpad.com/phenf3skn265g",
        text: "Pediatrie 1-50",
      },
      {
        url: "https://onlinetestpad.com/amgqnsoxlx5is",
        text: "Pediatrie 51-100",
      },
      {
        url: "https://onlinetestpad.com/nqds6gkg3t5by",
        text: "Pediatrie 101-150",
      },
      {
        url: "https://onlinetestpad.com/uftsvw27qihzc",
        text: "Pediatrie 151-200",
      },
      {
        url: "https://onlinetestpad.com/iudrrisnhtjnm",
        text: "Pediatrie 201-250",
      },
      {
        url: "https://onlinetestpad.com/kcg4ock3riyju",
        text: "Pediatrie 251-300",
      },
      {
        url: "https://onlinetestpad.com/pqluz6ybnqzgc",
        text: "Pediatrie 301-350",
      },
      {
        url: "https://onlinetestpad.com/zfgiylgn3m6pm",
        text: "Pediatrie 351-400",
      },
      {
        url: "https://onlinetestpad.com/3lalqy67bx2ks",
        text: "Pediatrie 401-450",
      },
      {
        url: "https://onlinetestpad.com/ajqa5pstzhplw",
        text: "Pediatrie 451-500",
      },
      {
        url: "https://onlinetestpad.com/zdxdgz4ncy3ri",
        text: "Pediatrie 501-550",
      },
      {
        url: "https://onlinetestpad.com/vb5at43c6z5mc",
        text: "Pediatrie 550 +",
      },
      {
        url: "https://onlinetestpad.com/p5etg3djl7if6",
        text: "Pediatrie Toate",
      },
    ],
  },
  {
    name: "Pneumologie",
    slug: "pneumologie",
    color: "#0984e3", // Albastru închis
    links: [
      {
        url: "https://onlinetestpad.com/d4yz6brcwg45g",
        text: "Pneumologie 1-50",
      },
      {
        url: "https://onlinetestpad.com/x7ltzvvhehyyi",
        text: "Pneumologie 51-100",
      },
      {
        url: "https://onlinetestpad.com/6nrucgjhrxsdg",
        text: "Pneumologie 101-150",
      },
      {
        url: "https://onlinetestpad.com/d2byuhqnyx2fg",
        text: "Pneumologie 151-200",
      },
      {
        url: "https://onlinetestpad.com/3qekia7khcio4",
        text: "Pneumologie 201-250",
      },
      {
        url: "https://onlinetestpad.com/df7r656nkij32",
        text: "Pneumologie 251-300",
      },
      {
        url: "https://onlinetestpad.com/lvinyi4subgam",
        text: "Pneumologie 300 +",
      },
      {
        url: "https://onlinetestpad.com/yobdglutt3tzs",
        text: "Pneumologie Toate",
      },
    ],
  },
  {
    name: "Reumatologie",
    slug: "reumatologie",
    color: "#fd79a8", // Roz deschis
    links: [
      {
        url: "https://onlinetestpad.com/2mzgslhjyk7go",
        text: "Reumatologie 1-50",
      },
      {
        url: "https://onlinetestpad.com/ddrr5nwpk4wo4",
        text: "Reumatologie 51-100",
      },
      {
        url: "https://onlinetestpad.com/xqomhtnllnge2",
        text: "Reumatologie 101-150",
      },
      {
        url: "https://onlinetestpad.com/krq5o4u6t5tb6",
        text: "Reumatologie 151-200",
      },
      {
        url: "https://onlinetestpad.com/jg4pvwblxawrs",
        text: "Reumatologie 201 +",
      },
      {
        url: "https://onlinetestpad.com/w34mfys5ru2em",
        text: "Reumatologie Toate",
      },
    ],
  },
];
