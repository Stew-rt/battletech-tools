
import React from 'react';

export default class BattlemechDamageTransferDiagramSVG extends React.Component<IBattlemechDamageTransferDiagramSVGProps, IBattlemechDamageTransferDiagramSVGState> {
    bgColor = "rgb(255,255,255)";
    strokeColor = "rgb(0,0,0)";
    theWidth = 744;
    theHeight = 627;
    xLoc = 0;
    yLoc = 0;
    constructor(props: IBattlemechDamageTransferDiagramSVGProps) {
        super(props);
        this.state = {
        }
        if( this.props.bgColor ) {
            this.bgColor = this.props.bgColor;
        }
        if( this.props.strokeColor ) {
            this.strokeColor = this.props.strokeColor;
        }


        let baseWidth = 744.09448819;
        let baseHeight = 1052.3622047;
        if( this.props.width ) {
            this.theWidth = this.props.width;
            this.theHeight = Math.round( this.props.width / baseWidth * baseHeight );

        }

        if( this.props.xLoc  ) {
            this.xLoc = this.props.xLoc;
        }

        if( this.props.yLoc ) {
            this.yLoc = this.props.yLoc;
        }

        // if( typeof(standAlone) == "undefined" )
        //     standAlone = true;

        // if( !baseFillColor )
        //     baseFillColor = colorTan;

        // if( !lineColor )
        //     lineColor = colorGold;
    }

    render() {



        // var svg = "";

        // if( standAlone ) {
        //     var svg = "<!DOCTYPE HTML><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xml:space=\"preserve\" height=\"" + theHeight  + " px\" width=\"" + theWidth  + "px\" viewBox=\"0 0 790 100\" ><g>\n";

        return (
                <svg
                viewBox="0 0 744.09448819 1052.3622047"
                height="354px"
                width="250px"
                x="485px"
                y="2070px"
                id="armorTransferDiagram"
                version="1.1">
                <g>
                <g
                transform="translate(0,-3.75)"
                id="layer1"
                >
                    <path
                    id="path4147"
                    d="m 61.887999,1036.062 c 0,-8.3004 1.22968,-12.3976 4.04506,-13.478 2.22479,-0.8537 5.66394,-4.6656 7.64257,-8.4708 2.6344,-5.0664 8.98108,-8.9615 23.70701,-14.54952 23.903121,-9.07056 29.001101,-15.23799 17.508271,-21.18119 l -7.7173,-3.99076 3.81616,-16.49626 c 2.09889,-9.07296 4.8554,-20.31358 6.12559,-24.97922 1.98918,-7.30656 1.24665,-9.82029 -5.35442,-18.12665 -4.21512,-5.30403 -7.66386,-12.5933 -7.66386,-16.19836 0,-6.08342 47.53658,-116.27873 53.3568,-123.68724 1.43561,-1.82738 2.48844,-14.26272 2.33963,-27.63409 -0.16375,-14.71484 1.58543,-32.62268 4.43122,-45.36615 l 4.70178,-21.05454 9.36403,-0.79713 9.36403,-0.79712 16.51841,-61.0506 c 9.08513,-33.57785 17.06998,-63.12316 17.74412,-65.65629 0.86164,-3.23769 -0.30774,-4.60568 -3.93698,-4.60568 -2.83948,0 -7.02094,-2.07256 -9.29213,-4.60568 -3.57615,-3.9886 -3.80026,-8.98563 -1.67265,-37.29539 1.35123,-17.97934 3.66028,-34.13981 5.13122,-35.91218 1.47093,-1.77237 7.07342,-3.98215 12.44998,-4.91061 5.37655,-0.92848 15.89861,-2.89316 23.38235,-4.36597 l 13.60681,-2.67788 -6.3682,-18.22718 c -3.50251,-10.02494 -8.94503,-31.57442 -12.09449,-47.88775 -3.14946,-16.3133 -6.07108,-30.11434 -6.49249,-30.66897 -0.42142,-0.55463 -10.46904,-2.56202 -22.32805,-4.46085 -11.85902,-1.89883 -23.2017,-5.09228 -25.20596,-7.09654 -2.04354,-2.04355 -4.33901,-11.9328 -5.22621,-22.51529 -0.87015,-10.37913 -2.59464,-18.87116 -3.8322,-18.87116 -1.23756,0 -2.25011,1.26892 -2.25011,2.81981 0,1.55089 -1.77647,4.59628 -3.94772,6.76753 -2.17125,2.17125 -3.96164,8.30433 -3.97865,13.62906 -0.017,5.32472 -1.90391,25.66963 -4.19314,45.21088 -2.28922,19.54124 -4.09053,38.49033 -4.0029,42.10908 0.0876,3.61875 -2.19194,32.51959 -5.06569,64.2241 -5.46557,60.29864 -6.66543,64.42367 -18.80537,64.6513 -4.17646,0.0784 -4.16559,0.97348 0.16878,13.90074 3.84043,11.45406 4.15375,16.15049 1.83211,27.46144 -1.54033,7.50442 -5.46532,16.46315 -8.72219,19.90826 -3.83997,4.06192 -5.9216,9.53023 -5.9216,15.55565 0,12.74555 -5.98827,17.07486 -26.318171,19.02712 l -17.10682,1.64275 -12.31335,-14.46955 c -12.12384,-14.24684 -12.29032,-14.69267 -10.81702,-28.9675 1.39595,-13.52552 1.11857,-14.49795 -4.13552,-14.49795 -7.41263,0 -7.12301,-3.55535 2.11436,-25.9562 5.64356,-13.68579 6.78275,-18.7847 4.19685,-18.7847 -1.95214,0 -9.68425,-8.27555 -17.18247,-18.39007 l -13.63312,-18.39007 9.744,-45.43152 c 5.3592,-24.98735 10.88854,-46.8561 12.28741,-48.59726 1.39888,-1.74116 2.47409,-8.84706 2.38937,-15.79091 -0.16001,-13.11442 4.16915,-69.61995 6.43925,-84.04724 1.19242,-7.57827 -0.21902,-9.52907 -17.13754,-23.68636 -19.48404,-16.3041 -20.22794,-18.00219 -16.84708,-38.45634 1.38994,-8.40908 2.65119,-9.89668 8.52445,-10.05429 15.85892,-0.42558 16.82138,-2.88507 6.03151,-15.41305 l -9.99746,-11.60791 5.72072,-15.79912 5.72073,-15.79913 17.17567,0.62267 17.17568,0.62267 -4.87584,-20.56717 c -2.68171,-11.31194 -4.91628,-21.76011 -4.96571,-23.21815 -0.0494,-1.45804 5.53563,-6.05196 12.41125,-10.20871 l 12.50114,-7.55773 15.894951,8.23485 c 8.74222,4.52917 16.73637,8.23485 17.76477,8.23485 1.0284,0 1.86982,-8.64092 1.86982,-19.20204 l 0,-19.202032 16.83827,-5.474525 16.83826,-5.474526 18.58062,18.754963 c 23.7456,23.96844 38.0494,52.18802 34.059,67.19409 -1.3837,5.20349 -4.49437,11.05229 -6.91258,12.99734 -3.75851,3.0231 -2.10449,3.31841 11.39416,2.03436 8.685,-0.82616 29.70664,-2.26349 46.71477,-3.19406 l 30.92388,-1.69195 0,-23.22158 c 0,-21.01304 0.5563,-23.61122 5.8492,-27.31853 3.2171,-2.25333 9.6183,-4.09697 14.2249,-4.09697 7.0714,0 9.3968,-1.74236 14.9326,-11.18843 3.6062,-6.15363 8.9811,-13.38235 11.9441,-16.0638 2.963,-2.681459 6.1783,-8.601608 7.1452,-13.155888 3.2805,-15.452106 7.2535,-17.491873 34.0699,-17.491873 26.3021,0 32.8977,3.137806 32.8977,15.6507 0,3.313681 3.6379,10.16822 8.0843,15.232311 4.4463,5.06408 9.9951,13.21458 12.3306,18.11221 3.6767,7.71016 5.5317,8.90477 13.8274,8.90477 16.0662,0 21.0259,7.87097 21.0259,33.36755 l 0,21.18512 30.9239,1.7615 c 17.0081,0.96883 38.0297,2.44674 46.7147,3.28426 13.9487,1.3451 15.2275,1.08957 10.9611,-2.19028 -8.7282,-6.71005 -9.3839,-20.03794 -1.9117,-38.86101 5.1581,-12.99356 11.5825,-22.07505 27.3519,-38.66418 l 20.6104,-21.681776 16.2351,5.777854 16.2351,5.777853 0.7732,19.069279 c 0.4253,10.48811 1.2911,19.06929 1.9241,19.06929 0.6329,0 8.613,-3.67979 17.7335,-8.17732 l 16.5827,-8.17731 12.4171,7.50019 c 6.8294,4.12511 12.3766,8.69314 12.3272,10.15118 -0.049,1.45804 -2.284,11.90621 -4.9657,23.21815 l -4.8758,20.56717 17.3811,-0.63012 17.3812,-0.63012 5.116,15.9939 5.1161,15.99391 -9.7347,11.37274 c -8.6226,10.07362 -9.1972,11.58498 -5.0303,13.23066 2.5873,1.02186 7.8062,1.94116 11.5974,2.0429 5.8733,0.15762 7.1345,1.64521 8.5244,10.05429 3.3819,20.4599 2.6404,22.14936 -16.8942,38.49605 -18.3147,15.32589 -18.4712,15.56709 -17.0781,26.31818 2.4669,19.03815 6.5019,70.97222 6.4464,82.9717 -0.029,6.37416 0.9857,12.29575 2.2559,13.15909 1.2702,0.86337 6.8251,22.53534 12.3441,48.15996 l 10.0345,46.59018 -13.6155,18.3663 c -7.4885,10.10147 -15.0163,18.83324 -16.7284,19.40392 -2.1662,0.72207 -0.9306,6.59984 4.0627,19.32686 8.5711,21.84628 8.7946,24.73843 1.9119,24.73843 -4.2247,0 -5.2637,1.75456 -5.2637,8.88913 0,4.88899 1.699,10.29912 3.7755,12.02246 3.1584,2.62126 1.1468,5.91272 -12.3083,20.13896 l -16.0837,17.0056 -15.9838,-1.72724 c -19.2899,-2.0845 -25.1951,-6.55262 -25.1951,-19.06378 0,-6.02542 -2.0816,-11.49373 -5.9216,-15.55565 -9.2587,-9.79382 -12.2755,-30.52638 -6.7899,-46.6628 4.2095,-12.38257 4.2125,-13.29028 0.047,-14.52395 -13.354,-3.95536 -13.2928,-3.74181 -18.7839,-65.60585 -2.874,-32.37882 -4.6119,-59.86326 -3.8621,-61.07655 0.7499,-1.21327 0.1469,-6.61184 -1.34,-11.99678 -1.4868,-5.38494 -4.1229,-27.36791 -5.858,-48.85102 -2.6769,-33.14532 -3.9942,-40.03729 -8.6991,-45.51272 -3.0494,-3.54889 -6.395,-6.45253 -7.4345,-6.45253 -1.0396,0 -1.8901,8.20427 -1.8901,18.23171 0,16.28546 -0.6985,18.78113 -6.5432,23.37858 -3.7489,2.94892 -13.0211,5.92356 -21.7125,6.96563 -27.259,3.2683 -25.5125,1.59059 -29.1033,27.95688 -1.7684,12.98442 -6.712,34.48137 -10.9857,47.771 -4.2737,13.28963 -7.3879,24.54541 -6.9205,25.01283 0.4674,0.46743 10.7835,2.68279 22.9246,4.92307 12.1411,2.24026 23.4146,5.79308 25.0523,7.89514 1.6377,2.10206 3.8312,18.62067 4.8744,36.70802 2.0062,34.78219 0.6357,40.65259 -9.4902,40.65259 -2.7177,0 -4.9414,1.3436 -4.9414,2.9858 0,1.64217 5.9854,25.03246 13.3008,51.97841 23.1136,85.13823 19.7995,76.6267 29.836,76.6267 l 8.7761,0 5.2536,25.66022 c 3.6899,18.02275 4.8851,31.76849 4.0154,46.18267 -0.965,15.99688 -0.352,21.5103 2.7802,25.00227 7.198,8.02468 51.8379,112.92456 51.8379,121.8145 0,4.99471 -2.6964,12.03096 -6.5432,17.07439 l -6.5432,8.57859 5.7844,25.69776 c 3.8499,17.1035 4.8428,26.01163 2.9687,26.63629 -1.5486,0.51623 -5.0115,2.54418 -7.6952,4.50659 -7.2869,5.32828 -1.9086,10.06689 22.6711,19.97501 11.8105,4.7608 20.9393,10.0062 20.9393,12.0318 0,1.9752 2.9608,5.5312 6.5795,7.9023 5.3624,3.5136 6.5796,6.4459 6.5796,15.8516 l 0,11.5405 -100.0091,0 -100.0091,0 0,-12.8369 c 0,-7.8005 1.4475,-14.0381 3.6895,-15.8988 2.0292,-1.6841 4.4006,-5.8953 5.2697,-9.3582 0.8692,-3.4629 3.9462,-7.0471 6.8378,-7.9648 4.188,-1.3292 5.2575,-3.98452 5.2575,-13.05295 0,-7.22644 -1.3204,-11.89095 -3.6154,-12.77161 -1.9885,-0.76306 -4.4622,-5.90132 -5.4972,-11.41835 -2.9122,-15.5232 -5.5712,-18.57484 -17.7903,-20.41685 -10.2112,-1.53933 -12.2048,-3.16153 -21.4327,-17.44004 l -10.1741,-15.74282 0.7598,-69.06183 c 0.4178,-37.98398 0.221,-76.42539 -0.4376,-85.42531 -1.1257,-15.38295 -1.8626,-16.93289 -12.2981,-25.8653 -11.5815,-9.9133 -13.4057,-14.62641 -7.7178,-19.93974 3.3778,-3.15536 1.7352,-10.33449 -18.8955,-82.58145 l -4.5092,-15.79091 -42.5066,-0.72256 -42.5067,-0.72259 -2.7109,9.93395 c -1.491,5.46366 -7.4164,27.06809 -13.1677,48.00987 -9.2284,33.60294 -10.006,38.57405 -6.6193,42.31631 5.9765,6.604 4.7207,9.59074 -7.9363,18.87548 -11.2729,8.26939 -11.7682,9.19663 -11.641,21.7959 0.073,7.2375 -0.9012,16.71205 -2.165,21.05455 -1.2637,4.3425 -1.4617,36.91125 -0.4398,72.375 l 1.8578,64.47954 -9.76084,15.79091 c -9.05535,14.64954 -10.70265,15.99032 -22.7907,18.54971 l -13.02985,2.75878 -3.52477,14.34804 c -1.93863,7.8914 -5.1955,15.2951 -7.2375,16.45265 -2.07867,1.17834 -3.71273,6.12606 -3.71273,11.24165 0,7.19218 1.40047,9.7751 6.57955,12.13487 3.61875,1.6488 6.57954,4.95 6.57954,7.336 0,2.3859 1.73881,6.637 3.86403,9.4468 2.12521,2.8098 3.90169,10.7342 3.94773,17.6099 l 0.0837,12.5011 -98.69318,0 -98.693181,0 0,-11.9258 z m 186.859081,-1.687 c 0,-6.8275 -9.57449,-23.0424 -15.13295,-25.6285 -5.31709,-2.4737 -5.92159,-4.6414 -5.92159,-21.23405 0,-14.45476 0.83764,-18.47915 3.84629,-18.47915 2.32765,0 4.96094,-4.41627 6.6694,-11.18523 4.9488,-19.60718 7.18492,-23.02541 15.08811,-23.06433 13.13748,-0.0648 17.89431,-2.75381 25.14491,-14.21453 l 7.15129,-11.30374 0,-57.13911 c 0,-33.06522 -1.109,-59.21128 -2.6322,-62.0574 -1.78398,-3.33339 -1.70577,-7.30606 0.24271,-12.32812 1.58119,-4.0754 3.32023,-15.5954 3.86454,-25.59999 0.93569,-17.19798 1.50844,-18.61777 10.50024,-26.02957 6.1702,-5.08602 8.4478,-8.49622 6.4847,-9.70949 -2.1554,-1.3321 1.2486,-17.5447 11.8323,-56.35628 9.9038,-36.31796 14.0177,-55.53597 12.3375,-57.63442 -1.3865,-1.73153 -3.3291,-12.62278 -4.3169,-24.20278 -2.7078,-31.74023 -1.6021,-30.26591 -22.6993,-30.26591 l -18.24541,0 0,7.89546 c 0,7.81571 -0.14622,7.89545 -14.475,7.89545 -14.39224,0 -14.475,-0.0461 -14.475,-8.05434 0,-7.67285 -0.4585,-8.01562 -9.68107,-7.2375 l -9.68106,0.81684 -12.5791,46.05682 c -6.9185,25.33125 -15.73317,57.60392 -19.58814,71.71704 l -7.00904,25.66023 -8.70557,0 c -8.44373,0 -8.80928,0.45514 -12.15388,15.13295 -2.01353,8.83641 -3.13285,26.50362 -2.69015,42.46091 0.66397,23.93297 0.1288,28.01989 -4.30784,32.89773 -7.45257,8.19369 -50.45869,105.63907 -50.45869,114.33178 0,4.52928 2.57214,9.85277 6.57954,13.61753 7.89096,7.41317 8.02756,11.23791 1.31591,36.84545 -2.84539,10.85625 -5.19373,20.01882 -5.21853,20.36127 -0.0247,0.34246 4.20432,2.39817 9.39805,4.56823 5.19375,2.1701 9.01188,4.85071 8.48475,5.95691 -9.72206,20.40254 -10.66946,21.29684 -30.49738,28.78894 -12.909351,4.8779 -21.127281,9.6994 -23.888331,14.0155 -2.31496,3.6188 -5.71784,7.5267 -7.56196,8.6842 -9.80712,6.1559 1.54026,7.1067 84.812951,7.1067 65.66526,0 88.1659,-0.7874 88.1659,-3.0855 z m 446.10465,0.4351 c 0.9009,-1.4577 -0.3042,-3.3957 -2.6781,-4.3067 -2.3738,-0.9109 -5.3153,-4.2843 -6.5366,-7.4964 -1.555,-4.09 -8.5596,-8.3956 -23.3726,-14.3667 -17.044,-6.8704 -22.1964,-10.29608 -26.528,-17.63764 -7.137,-12.09641 -6.8822,-13.44067 3.4856,-18.38475 l 8.8614,-4.22567 -6.4136,-23.46674 -6.4136,-23.46674 8.0795,-9.20202 c 4.4438,-5.06114 8.0795,-11.38856 8.0795,-14.06096 0,-6.88555 -46.7571,-111.46457 -51.4144,-114.99579 -2.9441,-2.23228 -3.8537,-9.3044 -3.8537,-29.96249 0,-14.87227 -1.378,-34.51908 -3.0622,-43.6596 -3.0173,-16.37543 -3.196,-16.63066 -12.1873,-17.41024 l -9.125,-0.79117 -16.7758,-61.84773 c -9.2267,-34.01625 -17.9999,-66.28892 -19.4961,-71.71704 -2.475,-8.97984 -3.5412,-9.86932 -11.8301,-9.86932 -8.3676,0 -9.1099,0.64338 -9.1099,7.89546 0,7.81571 -0.1463,7.89545 -14.475,7.89545 -14.3288,0 -14.475,-0.0797 -14.475,-7.89545 l 0,-7.89546 -19.1849,0 -19.185,0 -4.4158,32.36944 -4.4159,32.36947 12.027,43.2953 c 16.5616,59.61913 16.6386,59.97795 13.1583,61.3021 -1.6423,0.62482 1.1004,4.64424 6.0949,8.93202 8.525,7.31877 9.2179,9.14947 11.3193,29.90588 2.4867,24.56247 2.6861,121.10958 0.2862,138.5369 -1.3118,9.5256 -0.3074,13.06906 6.8784,24.26726 6.9276,10.79564 10.1189,13.39972 18.059,14.73573 17.9611,3.02215 18.3874,3.38873 21.8305,18.77445 2.2892,10.22887 4.7495,15.10679 8.0559,15.97142 3.997,1.04523 4.7603,4.0819 4.7603,18.93817 0,16.02396 -0.5843,17.95946 -6.1925,20.51476 -6.681,3.0441 -18.5627,23.1148 -16.0708,27.1468 2.1322,3.4501 174.101,3.2627 176.2361,-0.1921 z M 92.984209,594.43099 c 0.70197,-8.53493 0.0979,-9.95443 -3.90768,-9.18301 -3.18543,0.61345 -5.26917,4.1803 -6.35899,10.88498 -1.47,9.04362 -1.106,9.89901 3.90769,9.18305 4.33903,-0.61964 5.70734,-2.96182 6.35898,-10.88502 z m 593.095721,0.88414 c -0.7843,-8.22504 -2.0946,-10.52728 -5.9911,-10.52728 -3.8976,0 -4.9872,1.91663 -4.9872,8.77272 0,9.81195 1.5577,12.28183 7.7457,12.28183 3.3555,0 4.0278,-2.18946 3.2326,-10.52727 z m -562.5322,3.75973 c 2.27465,-2.27462 4.13572,-7.65774 4.13572,-11.96243 0,-7.61229 -0.27039,-7.77699 -9.86932,-6.01194 -9.8234,1.80635 -13.69997,4.82755 -13.77674,10.73687 -0.0546,4.19836 7.39136,11.37322 11.80288,11.37322 1.96446,0 5.43282,-1.86106 7.70746,-4.13572 z m 536.5713,-0.56702 c 5.128,-5.66636 3.1168,-16.33585 -3.0891,-16.38773 -2.3643,-0.021 -6.9635,-0.75007 -10.2203,-1.62288 -5.192,-1.39139 -5.9216,-0.5994 -5.9216,6.4275 0,8.2627 5.7261,16.28585 11.6232,16.28585 1.8435,0 5.267,-2.11622 7.6078,-4.70274 z m -233.0837,-1.21885 c 4.7619,-6.02315 6.0122,-18.57906 8.583,-86.19204 1.4035,-36.91125 3.3183,-75.69767 4.2552,-86.19204 1.4819,-16.59814 1.1439,-19.08069 -2.5978,-19.08069 -3.3434,0 -4.3014,2.63772 -4.3014,11.84319 0,6.51375 -0.92,11.84318 -2.0444,11.84318 -1.1245,0 -10.2722,-8.29131 -20.3284,-18.4251 l -18.2839,-18.42509 19.6704,-19.8341 19.6704,-19.83406 1.3159,12.59893 c 1.0869,10.40579 2.2322,12.59896 6.5796,12.59896 4.3293,0 5.573,-2.33563 7.0069,-13.15909 2.4382,-18.40422 2.6364,-130.29718 0.2306,-130.17361 -1.0857,0.0558 -4.3425,3.8606 -7.2375,8.45521 -19.4866,30.92673 -80.5908,34.07156 -106.8944,5.50148 -3.7868,-4.11319 -8.192,-9.84716 -9.7892,-12.74216 -2.1818,-3.95439 -2.924,11.18376 -2.9841,60.86079 -0.044,36.36844 0.6694,69.87169 1.5854,74.45166 2.4232,12.11584 7.4146,8.42424 8.3596,-6.18261 l 0.8136,-12.57688 18.925,18.04624 c 10.4087,9.92543 19.3614,19.05942 19.8948,20.29774 1.0464,2.42941 -33.7026,38.54169 -37.0867,38.54169 -1.1245,0 -2.0445,-5.32943 -2.0445,-11.84318 0,-7.05954 -1.203,-11.84319 -2.9783,-11.84319 -2.023,0 -2.4189,3.58786 -1.2342,11.18523 0.9593,6.15188 2.8313,41.38534 4.16,78.29659 2.2619,62.83302 5.253,96.15108 9.2061,102.5474 2.5747,4.16598 84.2246,3.63956 87.5483,-0.56445 z m -325.25193,-25.75916 25.4204,-3.12244 -3.30878,-9.57453 c -2.96096,-8.56806 -4.52655,-9.76154 -14.89313,-11.35334 -6.37139,-0.97833 -16.532611,-1.86657 -22.580481,-1.97387 -10.97463,-0.19475 -11.0068,-0.16659 -16.44886,14.37865 -6.74262,18.02125 -6.74654,17.88579 0.46886,16.17334 3.25687,-0.77296 17.36077,-2.81047 31.341991,-4.52781 z m 602.26823,4.28084 c 0,-0.59492 -2.533,-7.70083 -5.6289,-15.79091 -5.5969,-14.62575 -5.6902,-14.70807 -16.4488,-14.51411 -5.951,0.10738 -16.033,0.99554 -22.4044,1.97387 -10.3667,1.59183 -11.9321,2.7852 -14.8933,11.35403 l -3.3091,9.57526 28.0525,3.88515 c 35.1574,4.86918 34.632,4.81583 34.632,3.51671 z M 139.54002,534.12536 c 0.64026,-1.80938 3.33518,-27.44289 5.9887,-56.96339 4.72314,-52.54504 4.72014,-53.70093 -0.14296,-54.97265 -3.57589,-0.93514 -4.54953,-2.85647 -3.47542,-6.85821 0.82068,-3.05754 1.50832,-8.08576 1.52809,-11.1738 0.0205,-3.20187 2.10031,-6.15448 4.83988,-6.87089 4.21161,-1.10136 5.22778,-6.48925 8.24131,-43.69673 2.26829,-28.00601 4.60488,-43.40943 6.87007,-45.28938 1.88798,-1.56688 4.19337,-6.31222 5.12309,-10.5452 1.43102,-6.51537 2.44001,-7.29513 6.5757,-5.08178 7.16904,3.83676 7.86315,3.38602 7.86315,-5.10611 0,-6.46609 -1.17604,-7.85596 -7.2375,-8.55341 -6.75043,-0.77672 -7.29103,-1.76261 -8.03299,-14.64981 -0.76382,-13.26687 -0.52803,-13.81704 5.92159,-13.81704 6.08205,0 6.71708,-0.99525 6.71708,-10.52728 0,-8.98819 -0.81988,-10.52727 -5.60799,-10.52727 -5.01581,0 -5.43573,-1.04216 -3.97669,-9.86932 0.89721,-5.42812 1.64433,-13.1409 1.66026,-17.1395 0.0237,-5.93145 2.72214,-8.993 14.65457,-16.62608 8.04408,-5.14573 15.30088,-11.11563 16.12622,-13.26643 2.93047,-7.63668 -12.20533,-36.19853 -28.86637,-54.47195 l -16.36045,-17.94374 -9.86932,4.16201 -9.86932,4.16202 0,23.65104 c 0,13.00808 -0.84583,23.65105 -1.87962,23.65105 -1.03379,0 -11.2333,-4.86633 -22.66558,-10.81405 -18.582941,-9.66791 -21.452021,-10.45759 -27.070381,-7.45073 -7.60503,4.07009 -7.6169,4.45083 -1.02078,32.73977 2.895,12.41586 5.26364,23.24385 5.26364,24.06221 0,0.81835 -9.24427,0.66961 -20.54281,-0.33054 l -20.54281,-1.81846 -2.7605,8.99453 c -2.64644,8.62289 -2.17823,9.67283 11.33144,25.41037 7.75057,9.02871 14.09195,17.51939 14.09195,18.86818 0,1.34879 -3.25687,2.46538 -7.2375,2.48131 -18.21322,0.0729 -26.51778,3.05091 -28.30747,10.15107 -1.52231,6.03937 0.22128,8.68875 13.60972,20.67997 8.44564,7.56425 17.3538,13.78192 19.79592,13.81705 3.49801,0.0503 4.18037,1.87888 3.21568,8.61727 -0.67349,4.70437 -2.87138,26.31818 -4.8842,48.03068 -3.15446,34.02756 -3.14423,39.88065 0.0741,42.39922 2.15197,1.68407 3.73376,7.53763 3.73376,13.81704 0,9.03014 -0.87441,10.8951 -5.10831,10.8951 -2.80957,0 -5.74703,1.03346 -6.52767,2.29657 -2.03572,3.29386 -17.31402,75.80392 -17.31402,82.17147 0,2.93124 4.22745,10.88402 9.39434,17.67279 l 9.39433,12.34325 29.42499,2.92666 c 41.021581,4.08009 46.531041,4.12188 47.861101,0.36312 z m 114.4707,-1.97387 c 0,-4.45385 -1.75455,-5.26363 -11.40454,-5.26363 -6.27251,0 -12.13604,-0.73149 -13.03009,-1.62555 -0.89404,-0.89402 7.49488,-10.28367 18.64205,-20.86587 l 20.26758,-19.24032 19.08068,18.82613 c 10.49443,10.35439 19.08073,19.74403 19.08073,20.86587 0,1.12186 -5.3295,2.03974 -11.8432,2.03974 -10.17683,0 -11.84321,0.75754 -11.84321,5.38388 0,4.96908 1.36868,5.32393 17.76481,4.60568 l 17.7647,-0.7782 0.6274,-34.21364 c 0.345,-18.81749 -0.8393,-47.83329 -2.6319,-64.47954 l -3.2591,-30.26591 -11.1852,-0.80928 -11.1852,-0.80928 0,-13.00777 0,-13.00776 9.2113,0 9.2114,0 0,-92.11363 0,-92.11363 -8.5534,-0.0266 c -20.32983,-0.0633 -101.13437,5.84268 -105.93072,7.74247 -4.79517,1.89933 -5.18787,4.10821 -4.41231,24.81862 l 0.85132,22.73373 7.70209,0 c 7.37385,0 7.70208,-0.50471 7.70208,-11.84318 0,-6.51375 0.91788,-11.84319 2.03974,-11.84319 1.12185,0 10.6712,8.68947 21.22079,19.30994 l 19.18106,19.30993 -21.22079,19.13026 -21.2208,19.13026 0,-12.12201 c 0,-11.34231 -0.44622,-12.12201 -6.9373,-12.12201 l -6.9373,0 1.90052,30.92386 c 1.04529,17.00812 2.37751,31.40422 2.96048,31.99135 0.58297,0.58714 11.816,2.54639 24.96228,4.35392 13.14628,1.80754 24.23472,3.69579 24.64098,4.19615 0.40625,0.50033 2.70678,13.88771 5.11228,29.74973 2.40551,15.86199 8.52368,40.73267 13.59596,55.26818 5.07227,14.53548 9.49748,27.5335 9.8338,28.88447 0.33632,1.35096 -11.82386,4.90391 -27.02261,7.89545 l -27.63409,5.43915 -1.71358,14.475 c -0.94247,7.96125 -1.83071,21.28483 -1.97386,29.60796 l -0.26028,15.13295 18.42272,0 c 16.66818,0 18.42273,-0.50131 18.42273,-5.26364 z m 231.60001,0 c 0,-4.48383 -1.7546,-5.26363 -11.8432,-5.26363 -6.5137,0 -11.8432,-0.91788 -11.8432,-2.03974 0,-1.12184 8.5948,-10.57715 19.0996,-21.01178 l 19.0995,-18.97204 20.3929,18.60674 c 11.2161,10.23372 19.724,19.68903 18.9065,21.01178 -0.8175,1.32278 -6.7459,2.40504 -13.1743,2.40504 -9.9332,0 -11.6878,0.79015 -11.6878,5.26363 0,4.7627 1.7546,5.26364 18.4359,5.26364 l 18.436,0 -1.5495,-26.97614 c -0.8522,-14.83687 -1.9355,-28.27457 -2.4073,-29.86153 -0.4717,-1.58696 -13.4001,-5.03522 -28.7296,-7.66277 -15.3295,-2.62758 -27.8719,-5.75789 -27.8719,-6.95624 0,-1.19837 2.9502,-9.59329 6.5559,-18.6554 8.6493,-21.73814 16.9764,-54.66494 18.9172,-74.80185 0.8595,-8.91892 2.4017,-17.57352 3.427,-19.23246 1.0252,-1.65892 11.8538,-4.49323 24.0635,-6.29844 12.2096,-1.80525 23.6446,-4.17549 25.4111,-5.26722 2.2249,-1.3751 3.2117,-11.23616 3.2117,-32.09554 0,-28.35604 -0.3067,-30.11058 -5.2636,-30.11058 -4.4977,0 -5.2637,1.75454 -5.2637,12.05662 l 0,12.05662 -21.1703,-19.11569 -21.1703,-19.1157 19.1306,-19.25911 c 10.5218,-10.59251 20.0484,-19.25911 21.1703,-19.25911 1.1219,0 2.0397,5.32944 2.0397,11.84319 0,10.68012 0.608,11.84318 6.1913,11.84318 5.8901,0 6.2767,-1.11133 7.947,-22.84123 1.1426,-14.86425 0.7981,-23.43306 -0.9862,-24.53585 -3.2161,-1.98765 -112.7991,-9.13044 -114.4683,-7.46122 -0.6229,0.62283 -1.2732,41.93596 -1.4452,91.80695 l -0.3128,90.67452 6.7962,0.83276 c 6.2762,0.76905 6.7962,1.8263 6.7962,13.81705 l 0,12.98428 -8.9349,0 c -8.5187,0 -9.0058,0.52113 -10.4553,11.18523 -0.8362,6.15188 -2.3127,35.75983 -3.2812,65.79545 l -1.761,54.61023 18.7958,0 c 17.0411,0 18.7957,-0.49136 18.7957,-5.26364 z m 197.9689,1.0277 22.9529,-1.73931 9.8359,-14.28125 9.8359,-14.28124 -7.5567,-37.34137 c -9.2976,-45.94433 -10.4282,-49.18452 -17.1627,-49.18452 -4.4923,0 -5.3287,-1.71016 -5.3287,-10.8951 0,-6.01728 1.6067,-12.20327 3.5888,-13.81704 3.0155,-2.4551 3.0436,-8.38834 0.1761,-37.13559 -4.5277,-45.39002 -4.6539,-61.83047 -0.4751,-61.91158 1.8094,-0.0351 10.1999,-6.2528 18.6455,-13.81705 13.4095,-12.01012 15.1336,-14.63417 13.6036,-20.7044 -1.8605,-7.38073 -9.144,-10.1556 -26.6566,-10.1556 -4.8853,0 -8.8823,-1.10356 -8.8823,-2.45235 0,-1.34879 6.3413,-9.83947 14.0919,-18.86818 13.5097,-15.73754 13.9779,-16.78748 11.3314,-25.41037 l -2.7604,-8.99453 -20.5429,1.81846 c -11.2985,1.00015 -20.5428,1.33911 -20.5428,0.75325 0,-0.58585 2.343,-11.66406 5.2067,-24.61824 6.5317,-29.54698 6.5631,-28.57817 -1.0578,-32.65677 -5.7508,-3.07771 -8.3606,-2.34451 -26.5203,7.45073 -11.078,5.9754 -21.2352,10.86437 -22.5716,10.86437 -1.3363,0 -2.4478,-9.77063 -2.47,-21.7125 -0.021,-11.94188 -0.9104,-22.92093 -1.9739,-24.39789 -1.0634,-1.47696 -5.4865,-4.25252 -9.829,-6.1679 -7.8298,-3.45358 -8.0314,-3.33283 -24.2559,14.52856 -16.6559,18.33641 -31.7878,46.92613 -28.8664,54.5393 0.8254,2.1508 8.0822,8.1207 16.1263,13.26643 13.0265,8.33298 14.6256,10.3306 14.6256,18.27096 0,4.90329 0.7402,12.61607 1.6448,17.13951 1.4295,7.14719 0.9124,8.22443 -3.9477,8.22443 -4.7702,0 -5.5926,1.54813 -5.5926,10.52727 0,9.53203 0.635,10.52728 6.7171,10.52728 6.4496,0 6.6854,0.55017 5.9216,13.81704 -0.742,12.8872 -1.2826,13.87309 -8.033,14.64981 -6.0615,0.69745 -7.2375,2.08732 -7.2375,8.55341 0,8.53522 0.6749,8.95314 8.0685,4.99623 4.2028,-2.24929 5.0906,-1.85221 5.0906,2.27689 0,2.75072 2.193,7.82574 4.8733,11.27783 3.852,4.96121 5.5914,15.03681 8.3001,48.07986 3.0155,36.78574 4.0101,41.95587 8.2858,43.074 3.2655,0.85394 4.859,3.6887 4.859,8.64389 0,4.05529 0.6591,9.09095 1.4647,11.19036 0.9144,2.38292 -0.5629,4.34736 -3.932,5.22839 -4.2598,1.11397 -5.138,2.98885 -4.1682,8.89928 0.6758,4.1184 3.162,28.80573 5.5249,54.86073 2.3629,26.055 4.9174,48.39655 5.6767,49.64788 0.7593,1.25135 8.0367,1.57785 16.172,0.72556 8.1353,-0.85229 25.1202,-2.33232 37.7444,-3.28893 z m -269.028,-282.39662 c 14.4814,-7.31369 23.1484,-22.05938 26.7441,-45.50138 3.0563,-19.92476 3.2437,-20.27671 11.2105,-21.05454 l 8.1022,-0.79105 0.7918,-18.36019 c 0.91,-21.10163 -1.9167,-25.06481 -17.8772,-25.06481 -8.6165,0 -10.0216,-1.07408 -15.1117,-11.55094 -3.0865,-6.35301 -9.1406,-15.56992 -13.4534,-20.48201 -4.3129,-4.91208 -8.2412,-12.445582 -8.7297,-16.741102 l -0.888,-7.810037 -20.9466,0 -20.9467,0 -1.7312,8.464675 c -0.9521,4.655572 -5.4346,12.682644 -9.961,17.837944 -4.5265,5.1553 -10.6298,14.07762 -13.5631,19.82737 -4.6358,9.08676 -6.503,10.4541 -14.276,10.4541 -16.4706,0 -17.2685,1.10754 -17.2685,23.96794 l 0,20.77296 8.8308,0 8.8307,0 1.5873,16.99757 c 2.7124,29.04702 15.4067,46.81324 37.9175,53.0673 15.2337,4.2323 37.9464,2.42659 50.7382,-4.0338 z"
                    style={{fill: this.strokeColor}}
            >
            </path>
</g>
</g>
</svg>
      );
    }
}

interface IBattlemechDamageTransferDiagramSVGProps {
    bgColor?: string;
    strokeColor?: string;

    yLoc?: number;
    xLoc?: number;

    width?: number;
}

interface IBattlemechDamageTransferDiagramSVGState {
}