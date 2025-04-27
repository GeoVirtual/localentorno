(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"watermark":false,"minHeight":0,"scrollBarColor":"#000000","minWidth":0,"id":"rootPlayer","start":"this.init()","data":{"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false},"displayTooltipInTouchScreens":true,"history":{},"name":"Player700","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt"},"backgroundColor":["#FFFFFF"],"hash": "479688347ad39c0cf3581c1f7b8590f54dedf201ff2000fd1b5ccd515f10aaf8", "definitions": [{"hfovMax":130,"label":trans('panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62.label'),"overlays":["this.overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1","this.overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D","this.overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942","this.overlay_6E10B483_7C90_4F47_41C1_9B9151775D87","this.overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE","this.overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37","this.overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08","this.overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E","this.overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE","this.overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90","this.overlay_960C5316_87C6_68DF_41D9_CCB4136392A1","this.overlay_9615D4B6_87BE_29DE_41DF_39F9BB129DB8","this.overlay_99A76141_8846_28B5_41D9_2023124B4985","this.overlay_999CDD9F_8842_3BCE_41AF_9F1314DF0C44","this.overlay_91E1F949_9FC7_96ED_41E1_EEBD6FA8606A","this.overlay_9048D201_9FFB_BA5D_41D4_59989637D53F"],"hfovMin":"120%","id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","vfov":180,"hfov":360,"data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"frames":[{"thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","class":"CubicPanoramaFrame","cube":{"levels":[{"width":15600,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/vr/quest3/{face}/0.webp","tags":"mobilevr","height":2600,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6}],"class":"ImageResource"}}],"class":"Panorama"},{"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"progressHeight":2,"vrPointerSelectionColor":"#FF6600","progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"progressBorderSize":0,"class":"ViewerArea","playbackBarBottom":5,"progressRight":"33%","toolTipFontFamily":"Arial","vrPointerColor":"#FFFFFF","subtitlesFontFamily":"Arial","progressBarBorderRadius":2,"surfaceReticleSelectionColor":"#FFFFFF","progressOpacity":0.7,"toolTipPaddingBottom":4,"vrPointerSelectionTime":2000,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTop":0,"playbackBarHeight":10,"progressBarBackgroundColorDirection":"horizontal","subtitlesGap":0,"playbackBarHeadWidth":6,"subtitlesBackgroundColor":"#000000","playbackBarProgressBorderSize":0,"toolTipPaddingTop":4,"progressBarBackgroundColorRatios":[0],"toolTipPaddingLeft":6,"progressBarBorderColor":"#000000","playbackBarRight":0,"toolTipFontColor":"#606060","playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"propagateClick":false,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowOpacity":0.7,"progressBorderColor":"#000000","toolTipShadowColor":"#333138","progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"vrThumbstickRotationStep":20,"id":"MainViewer","playbackBarBorderColor":"#FFFFFF","toolTipTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipPaddingRight":6,"playbackBarProgressBorderColor":"#000000","progressBackgroundColor":["#000000"],"subtitlesFontSize":"3vmin","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","progressBorderRadius":2,"playbackBarBorderSize":0,"progressBottom":10,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"subtitlesBottom":50,"progressLeft":"33%","firstTransitionDuration":0,"toolTipFontSize":"1.11vmin","playbackBarHeadHeight":15,"playbackBarLeft":0,"height":"100%","playbackBarHeadShadowColor":"#000000","width":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0},{"keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","displayPlaybackBar":true,"class":"PanoramaPlayer","aaEnabled":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"items":[{"camera":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera","media":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"initialSequence":"this.sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8","class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera","initialPosition":{"pitch":-15.46,"class":"PanoramaCameraPosition","yaw":-1.04}},{"id":"overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-34.51,"vfov":9.32,"yaw":-2.33,"distance":50,"image":"this.res_6E7CF015_7C90_4743_41B4_29609BFA1272","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"hfov":12}],"data":{"label":"Theatro São João"},"areas":["this.HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2"],"useHandCursor":true,"maps":[]},{"id":"overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-25.76,"vfov":6.86,"yaw":38.25,"data":{"label":"Secretaria de Juventude e Cultura"},"distance":50,"image":"this.res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","roll":1.99,"hfov":8.84}],"data":{"label":"Secretaria de Juventude e Cultura"},"areas":["this.HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3"],"useHandCursor":true,"maps":[]},{"id":"overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-9.35,"vfov":7.52,"yaw":144.16,"distance":50,"image":"this.res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Igreja Menino Deus"},"hfov":9.7}],"data":{"label":"Igreja Menino Deus"},"areas":["this.HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104"],"useHandCursor":true,"maps":[]},{"id":"overlay_6E10B483_7C90_4F47_41C1_9B9151775D87","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-15.7,"vfov":8.75,"yaw":-158.51,"distance":50,"image":"this.res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Museu Dom Jos\u00e9"},"hfov":11.29}],"data":{"label":"Museu Dom José"},"areas":["this.HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D"],"useHandCursor":true,"maps":[]},{"id":"overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-37.01,"vfov":8.56,"yaw":-124.32,"distance":50,"image":"this.res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Escola de M\u00fasica"},"hfov":11.04}],"data":{"label":"Escola de Música"},"areas":["this.HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2"],"useHandCursor":true,"maps":[]},{"id":"overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-16.73,"vfov":8.75,"yaw":-175.64,"distance":50,"image":"this.res_6E00CD74_7C90_D9C1_41DB_F6546D67776E","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Casa da Cultura"},"hfov":11.29}],"data":{"label":"Casa da Cultura"},"areas":["this.HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95"],"useHandCursor":true,"maps":[]},{"id":"overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":1.5,"vfov":6.65,"yaw":143.7,"distance":50,"image":"this.res_6EA68127_7C90_494F_41DA_0830A8E26D02","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Igreja da S\u00e9"},"hfov":8.58}],"data":{"label":"Igreja da Sé"},"areas":["this.HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37"],"useHandCursor":true,"maps":[]},{"id":"overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":0.64,"vfov":8.13,"yaw":128,"distance":50,"image":"this.res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Igreja das Dores"},"hfov":10.49}],"data":{"label":"Igreja das Dores"},"areas":["this.HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939"],"useHandCursor":true,"maps":[]},{"id":"overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":1.97,"vfov":8.79,"yaw":-105.37,"distance":50,"image":"this.res_6EEA0777_7C90_C9CE_41A2_B09D558607BF","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Igreja S\u00e3o Francisco"},"hfov":11.33}],"data":{"label":"Igreja São Francisco"},"areas":["this.HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881"],"useHandCursor":true,"maps":[]},{"id":"overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":8.48,"vfov":8.58,"yaw":-129.31,"distance":50,"image":"this.res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Serra da Meruoca"},"hfov":11.06}],"data":{"label":"Serra da Meruoca"},"areas":["this.HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6"],"useHandCursor":true,"maps":[]},{"id":"overlay_960C5316_87C6_68DF_41D9_CCB4136392A1","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-10.17,"vfov":4.9,"yaw":9.79,"distance":50,"image":"this.res_9AD2A72D_8842_28CD_41D1_88906E9A19E5","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Boulevard do Arco"},"hfov":6.32}],"data":{"label":"Boulevard do Arco"},"areas":["this.HotspotPanoramaOverlayArea_88056339_87C6_68D5_41DC_21A9C305EA53"],"useHandCursor":true,"maps":[]},{"id":"overlay_9615D4B6_87BE_29DE_41DF_39F9BB129DB8","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-70.51,"vfov":8.57,"yaw":34.78,"data":{"label":"Est\u00e1tua de Belchior"},"distance":50,"image":"this.res_9A53E72F_8842_28CD_41D4_6B7185823140","class":"HotspotPanoramaOverlayImage","rotationX":5.79,"scaleMode":"fit_inside","roll":12.49,"hfov":11.05}],"data":{"label":"Estátua de Belchior"},"areas":["this.HotspotPanoramaOverlayArea_88089548_87BE_28B3_41D5_74B1CD733668"],"useHandCursor":true,"maps":[]},{"id":"overlay_99A76141_8846_28B5_41D9_2023124B4985","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-71.12,"vfov":9.35,"yaw":-44.02,"data":{"label":"Fonte"},"distance":50,"image":"this.res_9A503982_8846_1BB7_41E0_B358A504D714","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","roll":18.17,"hfov":12.06}],"data":{"label":"Fonte"},"areas":["this.HotspotPanoramaOverlayArea_986CE164_8846_2B73_41B0_411D738DB42D"],"useHandCursor":true,"maps":[]},{"id":"overlay_999CDD9F_8842_3BCE_41AF_9F1314DF0C44","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-2.72,"vfov":4.83,"yaw":5.65,"distance":50,"image":"this.res_99B60D41_8842_18B5_41BF_8F8D186DC92B","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Arco Nossa Senhora de F\u00e1tima"},"hfov":6.23}],"data":{"label":"Arco Nossa Senhora de Fátima"},"areas":["this.HotspotPanoramaOverlayArea_987C8DCB_8842_3BB6_41CC_3D77D59ABEFB"],"useHandCursor":true,"maps":[]},{"id":"overlay_91E1F949_9FC7_96ED_41E1_EEBD6FA8606A","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"pitch":-4.63,"vfov":7.63,"yaw":-110.63,"distance":50,"image":"this.res_8F60BF9F_9FFD_8A65_41AD_161708EC769C","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","data":{"label":"Casar\u00e3o Mont\u2019Alverne"},"hfov":9.84}],"data":{"label":"Casarão Mont’Alverne"},"areas":["this.HotspotPanoramaOverlayArea_9237F9D2_9FC7_89FF_41E3_40ED98ED1FAC"],"useHandCursor":true,"maps":[]},{"id":"overlay_9048D201_9FFB_BA5D_41D4_59989637D53F","class":"HotspotPanoramaOverlay","items":[{"pitch":-77.47,"vfov":4.47,"yaw":49.66,"data":{"label":"Belchior"},"distance":50,"image":"this.res_8F60AF9F_9FFD_8A65_41C6_AD1810BDE18E","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","roll":26.83,"hfov":3.61}],"data":{"label":"Belchior"},"areas":["this.HotspotPanoramaOverlayArea_91709263_9FFB_BADD_41C5_C5770B4E3331"],"useHandCursor":true,"maps":[]},{"movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}],"class":"PanoramaCameraSequence","id":"sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8"},{"levels":[{"width":385,"url":"media/res_6E7CF015_7C90_4743_41B4_29609BFA1272_0.webp","height":300,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6E7CF015_7C90_4743_41B4_29609BFA1272"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2","displayTooltipInTouchScreens":true},{"levels":[{"width":283,"url":"media/res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F_0.webp","height":220,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3","displayTooltipInTouchScreens":true},{"levels":[{"width":306,"url":"media/res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD_0.webp","height":242,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104","displayTooltipInTouchScreens":true},{"levels":[{"width":363,"url":"media/res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3_0.webp","height":281,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D","displayTooltipInTouchScreens":true},{"levels":[{"width":355,"url":"media/res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A_0.webp","height":275,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2","displayTooltipInTouchScreens":true},{"levels":[{"width":363,"url":"media/res_6E00CD74_7C90_D9C1_41DB_F6546D67776E_0.webp","height":281,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6E00CD74_7C90_D9C1_41DB_F6546D67776E"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95","displayTooltipInTouchScreens":true},{"levels":[{"width":275,"url":"media/res_6EA68127_7C90_494F_41DA_0830A8E26D02_0.webp","height":214,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EA68127_7C90_494F_41DA_0830A8E26D02"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37","displayTooltipInTouchScreens":true},{"levels":[{"width":337,"url":"media/res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209_0.webp","height":261,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939","displayTooltipInTouchScreens":true},{"levels":[{"width":365,"url":"media/res_6EEA0777_7C90_C9CE_41A2_B09D558607BF_0.webp","height":282,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA0777_7C90_C9CE_41A2_B09D558607BF"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881","displayTooltipInTouchScreens":true},{"levels":[{"width":356,"url":"media/res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062_0.webp","height":276,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6","displayTooltipInTouchScreens":true},{"levels":[{"width":203,"url":"media/res_9AD2A72D_8842_28CD_41D1_88906E9A19E5_0.webp","height":157,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_9AD2A72D_8842_28CD_41D1_88906E9A19E5"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_88056339_87C6_68D5_41DC_21A9C305EA53","displayTooltipInTouchScreens":true},{"levels":[{"width":356,"url":"media/res_9A53E72F_8842_28CD_41D4_6B7185823140_0.webp","height":275,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_9A53E72F_8842_28CD_41D4_6B7185823140"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_88089548_87BE_28B3_41D5_74B1CD733668","displayTooltipInTouchScreens":true},{"levels":[{"width":381,"url":"media/res_9A503982_8846_1BB7_41E0_B358A504D714_0.webp","height":301,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_9A503982_8846_1BB7_41E0_B358A504D714"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_986CE164_8846_2B73_41B0_411D738DB42D","displayTooltipInTouchScreens":true},{"levels":[{"width":200,"url":"media/res_99B60D41_8842_18B5_41BF_8F8D186DC92B_0.webp","height":155,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_99B60D41_8842_18B5_41BF_8F8D186DC92B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_987C8DCB_8842_3BB6_41CC_3D77D59ABEFB","displayTooltipInTouchScreens":true},{"levels":[{"width":316,"url":"media/res_8F60BF9F_9FFD_8A65_41AD_161708EC769C_0.webp","height":245,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_8F60BF9F_9FFD_8A65_41AD_161708EC769C"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9237F9D2_9FC7_89FF_41E3_40ED98ED1FAC","displayTooltipInTouchScreens":true},{"levels":[{"width":116,"url":"media/res_8F60AF9F_9FFD_8A65_41C6_AD1810BDE18E_0.webp","height":143,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_8F60AF9F_9FFD_8A65_41C6_AD1810BDE18E"},{"mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.openLink(this.translate('LinkBehaviour_90A32D3D_9FFC_8EA5_41D7_6C7E41024916.source'), '_blank')","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_91709263_9FFB_BADD_41C5_C5770B4E3331"}],"class":"Player","scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"scripts":{"showPopupImage":TDV.Tour.Script.showPopupImage,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"clone":TDV.Tour.Script.clone,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"mixObject":TDV.Tour.Script.mixObject,"openLink":TDV.Tour.Script.openLink,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"isPanorama":TDV.Tour.Script.isPanorama,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setMapLocation":TDV.Tour.Script.setMapLocation,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"registerKey":TDV.Tour.Script.registerKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPixels":TDV.Tour.Script.getPixels,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"toggleVR":TDV.Tour.Script.toggleVR,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"disableVR":TDV.Tour.Script.disableVR,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setValue":TDV.Tour.Script.setValue,"getOverlays":TDV.Tour.Script.getOverlays,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"enableVR":TDV.Tour.Script.enableVR,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"cloneBindings":TDV.Tour.Script.cloneBindings,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"executeJS":TDV.Tour.Script.executeJS,"getKey":TDV.Tour.Script.getKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"downloadFile":TDV.Tour.Script.downloadFile,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"showWindow":TDV.Tour.Script.showWindow,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumePlayers":TDV.Tour.Script.resumePlayers,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizStart":TDV.Tour.Script.quizStart,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"translate":TDV.Tour.Script.translate,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"textToSpeech":TDV.Tour.Script.textToSpeech,"createTween":TDV.Tour.Script.createTween,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"setLocale":TDV.Tour.Script.setLocale},"height":"100%","backgroundColorRatios":[0],"propagateClick":false,"children":["this.MainViewer"],"width":"100%","layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Apr 27 2025