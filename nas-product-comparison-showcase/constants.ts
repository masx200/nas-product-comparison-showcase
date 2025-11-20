import {
  Cloud,
  Cpu,
  CreditCard,
  Database,
  Gem,
  HardDrive,
  Lock,
  MonitorPlay,
  Network,
  Rocket,
  Scale,
  Server,
  Settings,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";
import { ComparisonRow, ProductData, RecommendationItem } from "./types";

export const products: ProductData[] = [
  {
    id: "terramaster",
    name: "铁威马 F8 SSD Plus",
    tagline: "掌中性能小怪兽 · 8盘位全闪NAS",
    price: "约4600元",
    image: "/images/nas-products/terramaster-f8-ssd-plus.jpg",
    colorTheme: "blue",
    featureTitle: "超静音设计",
    specs: [
      { icon: CreditCard, label: "价格", value: "约4600元", highlight: true },
      { icon: Cpu, label: "处理器", value: "Intel Core i3-N305 (8核8线程)" },
      { icon: Zap, label: "内存", value: "16GB DDR5 4800MHz", highlight: true },
      { icon: HardDrive, label: "存储", value: "8×M.2 NVMe SSD (Max 64TB)" },
      { icon: Network, label: "网络", value: "10GbE × 1" },
      { icon: Shield, label: "RAID", value: "TRAID / RAID 0/1/5/6/10" },
    ],
    features: [
      { icon: Lock, text: "待机噪音低于19dB" },
      { icon: Server, text: "创新对流散热设计" },
      { icon: Database, text: "高性能全闪存阵列" },
    ],
  },
  {
    id: "zspace",
    name: "极空间 Z4Pro+ 8G版",
    tagline: 'Z4Pro+焕"芯"一代 · 智能数据管家',
    price: "约2699元",
    image: "/images/nas-products/zspace-z4pro.png",
    colorTheme: "purple",
    featureTitle: "丰富接口配置",
    specs: [
      { icon: CreditCard, label: "价格", value: "约2699元", highlight: true },
      { icon: Zap, label: "内存", value: "8GB DDR5 (可扩容至16GB)" },
      { icon: HardDrive, label: "盘位", value: "4盘位 (Max 120TB)" },
      { icon: Shield, label: "RAID", value: "ZDR / RAID1 / RAID5" },
      { icon: Network, label: "网络", value: "2.5GbE × 2" },
      { icon: MonitorPlay, label: "输出", value: "HDMI 2.0B (4K@60Hz)" },
    ],
    features: [
      { icon: Settings, text: "3×Type-C (USB3.2 Gen2)" },
      { icon: Database, text: "eSATA / USB-A 扩展" },
      { icon: Smartphone, text: "极影视 / 极相册体验" },
    ],
  },
  {
    id: "ugreen",
    name: "绿联 DXP4800 Plus",
    tagline: "全能高效 · 更懂你的私有云",
    price: "约2500-2999元",
    image: "/images/nas-products/ugreen-dxp4800.png",
    colorTheme: "green",
    featureTitle: "灵活存储方案",
    specs: [
      { icon: CreditCard, label: "价格", value: "约2500-2999元" },
      { icon: Cpu, label: "处理器", value: "Pentium Gold 8505 (5核6线程)" },
      { icon: Zap, label: "内存", value: "8GB DDR5 (Max 64GB)" },
      { icon: HardDrive, label: "存储", value: "4×SATA + 2×M.2 NVMe" },
      {
        icon: Network,
        label: "网络",
        value: "10GbE × 1 + 2.5GbE × 1",
        highlight: true,
      },
      { icon: MonitorPlay, label: "输出", value: "HDMI 4K@60Hz" },
    ],
    features: [
      { icon: Shield, text: "支持ECC内存" },
      { icon: Database, text: "混合存储方案" },
      { icon: Server, text: "UGOS Pro系统" },
    ],
  },
  {
    id: "fnbeelink",
    name: "飞牛零刻 ME mini",
    tagline: "6盘位全闪NAS · 迷你高效存储",
    price: "约1295元",
    image: "/images/nas-products/fnbeelink-me-mini.png",
    colorTheme: "red",
    featureTitle: "飞牛fnOS系统特色",
    specs: [
      { icon: CreditCard, label: "价格", value: "约1295元", highlight: true },
      { icon: Cpu, label: "处理器", value: "Intel N150 (4核4线程)" },
      { icon: Zap, label: "内存", value: "12GB LPDDR5", highlight: true },
      { icon: HardDrive, label: "存储", value: "6×M.2 SSD (Max 48TB)" },
      { icon: Network, label: "网络", value: "2.5GbE × 2" },
      { icon: Shield, label: "RAID", value: "RAID 0/1/5/6/10" },
    ],
    features: [
      { icon: Cloud, text: "高速远程访问" },
      { icon: MonitorPlay, text: "影视中心/AI相册" },
      { icon: Settings, text: "一键重置/定时开关" },
    ],
  },
];

export const comparisonData: ComparisonRow[] = [
  {
    parameter: "价格",
    terra: "约4600元",
    zspace: "约2699元",
    ugreen: "2500-2999元",
    fn: "约1295元",
  },
  {
    parameter: "盘位数量",
    terra: "8盘位 (全闪)",
    zspace: "4盘位 (混合)",
    ugreen: "4+2盘位",
    fn: "6盘位 (全闪)",
  },
  {
    parameter: "处理器",
    terra: "i3-N305 (8核)",
    zspace: "未明确",
    ugreen: "Pentium 8505 (5核)",
    fn: "N150 (4核)",
  },
  {
    parameter: "内存",
    terra: "16GB DDR5",
    zspace: "8GB DDR5",
    ugreen: "8GB DDR5",
    fn: "12GB LPDDR5",
  },
  {
    parameter: "存储上限",
    terra: "64TB",
    zspace: "120TB",
    ugreen: "128TB",
    fn: "48TB",
  },
  {
    parameter: "网络",
    terra: "10GbE × 1",
    zspace: "2.5GbE × 2",
    ugreen: "10G + 2.5G",
    fn: "2.5GbE × 2",
  },
];

export const recommendations: RecommendationItem[] = [
  {
    id: "perf",
    icon: Rocket,
    title: "追求极致性能",
    description:
      "选择铁威马 F8 SSD Plus。8核处理器与10G网络，专为极客和专业用户打造。",
    colorClass: "bg-blue-600",
  },
  {
    id: "value",
    icon: Gem,
    title: "极致性价比",
    description:
      "选择飞牛零刻 ME mini。千元出头即可拥有全闪6盘位与优秀的fnOS系统。",
    colorClass: "bg-red-500",
  },
  {
    id: "balance",
    icon: Scale,
    title: "均衡之选",
    description:
      "选择极空间 Z4Pro+。软硬件结合优秀，适合大多数家庭用户的省心之选。",
    colorClass: "bg-purple-600",
  },
  {
    id: "hybrid",
    icon: Database,
    title: "混合存储需求",
    description: "选择绿联 DXP4800 Plus。万兆网络加持，机械与固态硬盘兼得。",
    colorClass: "bg-green-600",
  },
];
