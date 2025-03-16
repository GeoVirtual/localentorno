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
var script = {"minHeight":0,"id":"rootPlayer","gap":10,"data":{"defaultLocale":"pt","history":{},"textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"volume":1,"speechOnInfoWindow":false},"name":"Player700","locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"children":["this.MainViewer"],"class":"Player","defaultMenu":["fullscreen","mute","rotation"],"scripts":{"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"clone":TDV.Tour.Script.clone,"toggleVR":TDV.Tour.Script.toggleVR,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"initAnalytics":TDV.Tour.Script.initAnalytics,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPixels":TDV.Tour.Script.getPixels,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"historyGoBack":TDV.Tour.Script.historyGoBack,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"playAudioList":TDV.Tour.Script.playAudioList,"cloneBindings":TDV.Tour.Script.cloneBindings,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"openLink":TDV.Tour.Script.openLink,"executeJS":TDV.Tour.Script.executeJS,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setValue":TDV.Tour.Script.setValue,"textToSpeech":TDV.Tour.Script.textToSpeech,"startMeasurement":TDV.Tour.Script.startMeasurement,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"init":TDV.Tour.Script.init,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizFinish":TDV.Tour.Script.quizFinish,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"mixObject":TDV.Tour.Script.mixObject,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"enableVR":TDV.Tour.Script.enableVR,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showWindow":TDV.Tour.Script.showWindow,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"existsKey":TDV.Tour.Script.existsKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"downloadFile":TDV.Tour.Script.downloadFile,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getKey":TDV.Tour.Script.getKey,"createTween":TDV.Tour.Script.createTween,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initQuiz":TDV.Tour.Script.initQuiz,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"translate":TDV.Tour.Script.translate,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setLocale":TDV.Tour.Script.setLocale,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"disableVR":TDV.Tour.Script.disableVR,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags},"watermark":false,"layout":"absolute","start":"this.init()","height":"100%","width":"100%","propagateClick":false,"hash": "9831b8d8e60aa7b59fe4bd37a0dd6c551527c6061a87a4b1c453a720352c34eb", "definitions": [{"displayPlaybackBar":true,"viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer"},{"items":[{"camera":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera","media":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"minWidth":100,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingTop":4,"vrPointerSelectionTime":2000,"data":{"name":"Main Viewer"},"playbackBarBottom":5,"vrPointerSelectionColor":"#FF6600","toolTipFontSize":"1.11vmin","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadWidth":6,"class":"ViewerArea","progressBackgroundColorRatios":[0],"firstTransitionDuration":0,"progressRight":"33%","playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesFontFamily":"Arial","toolTipPaddingLeft":6,"toolTipShadowColor":"#333138","progressOpacity":0.7,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"propagateClick":false,"toolTipBorderColor":"#767676","progressBorderColor":"#000000","subtitlesTop":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","toolTipTextShadowColor":"#000000","subtitlesTextShadowHorizontalLength":1,"progressBackgroundColor":["#000000"],"toolTipFontColor":"#606060","id":"MainViewer","playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"progressHeight":2,"toolTipPaddingRight":6,"playbackBarBorderRadius":0,"subtitlesBottom":50,"playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"progressBorderSize":0,"progressBarBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBarBorderRadius":2,"subtitlesBorderColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"progressBorderRadius":2,"playbackBarBackgroundOpacity":1,"playbackBarHeadShadowBlurRadius":3,"subtitlesTextShadowOpacity":1,"toolTipFontFamily":"Arial","playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"vrThumbstickRotationStep":20,"progressLeft":"33%","playbackBarHeadBorderSize":0,"minHeight":50,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadow":true,"height":"100%","toolTipPaddingBottom":4,"width":"100%"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8","id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera","class":"PanoramaCamera","initialPosition":{"pitch":-15.46,"yaw":-1.04,"class":"PanoramaCameraPosition"}},{"vfov":180,"hfov":360,"label":trans('panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62.label'),"id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","hfovMin":"120%","data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"overlays":["this.overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1","this.overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D","this.overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942","this.overlay_6E10B483_7C90_4F47_41C1_9B9151775D87","this.overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE","this.overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37","this.overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08","this.overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E","this.overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE","this.overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90","this.overlay_960C5316_87C6_68DF_41D9_CCB4136392A1","this.overlay_9615D4B6_87BE_29DE_41DF_39F9BB129DB8","this.overlay_99A76141_8846_28B5_41D9_2023124B4985","this.overlay_999CDD9F_8842_3BCE_41AF_9F1314DF0C44","this.overlay_91E1F949_9FC7_96ED_41E1_EEBD6FA8606A","this.overlay_9048D201_9FFB_BA5D_41D4_59989637D53F"],"thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","cube":{"levels":[{"width":18432,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/0/{row}_{column}.webp","rowCount":6,"tags":"ondemand","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"width":9216,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/1/{row}_{column}.webp","rowCount":3,"tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/2/{row}_{column}.webp","rowCount":2,"tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/3/{row}_{column}.webp","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama"},{"movements":[{"yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8","class":"PanoramaCameraSequence"},{"data":{"label":"Theatro São João"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2"],"items":[{"pitch":-34.51,"yaw":-2.33,"distance":50,"image":"this.res_6E7CF015_7C90_4743_41B4_29609BFA1272","vfov":9.32,"hfov":12,"scaleMode":"fit_inside","data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1","class":"HotspotPanoramaOverlay"},{"data":{"label":"Secretaria de Juventude e Cultura"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3"],"items":[{"pitch":-25.76,"yaw":38.25,"data":{"label":"Secretaria de Juventude e Cultura"},"distance":50,"image":"this.res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F","vfov":6.86,"hfov":8.84,"scaleMode":"fit_inside","roll":1.99,"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D","class":"HotspotPanoramaOverlay"},{"data":{"label":"Igreja Menino Deus"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104"],"items":[{"pitch":-9.35,"yaw":144.16,"distance":50,"image":"this.res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD","vfov":7.52,"hfov":9.7,"scaleMode":"fit_inside","data":{"label":"Igreja Menino Deus"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942","class":"HotspotPanoramaOverlay"},{"data":{"label":"Museu Dom José"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D"],"items":[{"pitch":-15.7,"yaw":-158.51,"distance":50,"image":"this.res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3","vfov":8.75,"hfov":11.29,"scaleMode":"fit_inside","data":{"label":"Museu Dom Jos\u00e9"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6E10B483_7C90_4F47_41C1_9B9151775D87","class":"HotspotPanoramaOverlay"},{"data":{"label":"Escola de Música"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2"],"items":[{"pitch":-37.01,"yaw":-124.32,"distance":50,"image":"this.res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A","vfov":8.56,"hfov":11.04,"scaleMode":"fit_inside","data":{"label":"Escola de M\u00fasica"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE","class":"HotspotPanoramaOverlay"},{"data":{"label":"Casa da Cultura"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95"],"items":[{"pitch":-16.73,"yaw":-175.64,"distance":50,"image":"this.res_6E00CD74_7C90_D9C1_41DB_F6546D67776E","vfov":8.75,"hfov":11.29,"scaleMode":"fit_inside","data":{"label":"Casa da Cultura"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37","class":"HotspotPanoramaOverlay"},{"data":{"label":"Igreja da Sé"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37"],"items":[{"pitch":1.5,"yaw":143.7,"distance":50,"image":"this.res_6EA68127_7C90_494F_41DA_0830A8E26D02","vfov":6.65,"hfov":8.58,"scaleMode":"fit_inside","data":{"label":"Igreja da S\u00e9"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08","class":"HotspotPanoramaOverlay"},{"data":{"label":"Igreja das Dores"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939"],"items":[{"pitch":0.64,"yaw":128,"distance":50,"image":"this.res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209","vfov":8.13,"hfov":10.49,"scaleMode":"fit_inside","data":{"label":"Igreja das Dores"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E","class":"HotspotPanoramaOverlay"},{"data":{"label":"Igreja São Francisco"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881"],"items":[{"pitch":1.97,"yaw":-105.37,"distance":50,"image":"this.res_6EEA0777_7C90_C9CE_41A2_B09D558607BF","vfov":8.79,"hfov":11.33,"scaleMode":"fit_inside","data":{"label":"Igreja S\u00e3o Francisco"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE","class":"HotspotPanoramaOverlay"},{"data":{"label":"Serra da Meruoca"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6"],"items":[{"pitch":8.48,"yaw":-129.31,"distance":50,"image":"this.res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062","vfov":8.58,"hfov":11.06,"scaleMode":"fit_inside","data":{"label":"Serra da Meruoca"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90","class":"HotspotPanoramaOverlay"},{"data":{"label":"Boulevard do Arco"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_88056339_87C6_68D5_41DC_21A9C305EA53"],"items":[{"pitch":-10.17,"yaw":9.79,"distance":50,"image":"this.res_9AD2A72D_8842_28CD_41D1_88906E9A19E5","vfov":4.9,"hfov":6.32,"scaleMode":"fit_inside","data":{"label":"Boulevard do Arco"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_960C5316_87C6_68DF_41D9_CCB4136392A1","class":"HotspotPanoramaOverlay"},{"data":{"label":"Estátua de Belchior"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_88089548_87BE_28B3_41D5_74B1CD733668"],"items":[{"pitch":-70.51,"yaw":34.78,"data":{"label":"Est\u00e1tua de Belchior"},"distance":50,"image":"this.res_9A53E72F_8842_28CD_41D4_6B7185823140","vfov":8.57,"hfov":11.05,"rotationX":5.79,"scaleMode":"fit_inside","roll":12.49,"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_9615D4B6_87BE_29DE_41DF_39F9BB129DB8","class":"HotspotPanoramaOverlay"},{"data":{"label":"Fonte"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_986CE164_8846_2B73_41B0_411D738DB42D"],"items":[{"pitch":-71.12,"yaw":-44.02,"data":{"label":"Fonte"},"distance":50,"image":"this.res_9A503982_8846_1BB7_41E0_B358A504D714","vfov":9.35,"hfov":12.06,"scaleMode":"fit_inside","roll":18.17,"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_99A76141_8846_28B5_41D9_2023124B4985","class":"HotspotPanoramaOverlay"},{"data":{"label":"Arco Nossa Senhora de Fátima"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_987C8DCB_8842_3BB6_41CC_3D77D59ABEFB"],"items":[{"pitch":-2.72,"yaw":5.65,"distance":50,"image":"this.res_99B60D41_8842_18B5_41BF_8F8D186DC92B","vfov":4.83,"hfov":6.23,"scaleMode":"fit_inside","data":{"label":"Arco Nossa Senhora de F\u00e1tima"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_999CDD9F_8842_3BCE_41AF_9F1314DF0C44","class":"HotspotPanoramaOverlay"},{"data":{"label":"Casarão Mont’Alverne"},"maps":[],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9237F9D2_9FC7_89FF_41E3_40ED98ED1FAC"],"items":[{"pitch":-4.63,"yaw":-110.63,"distance":50,"image":"this.res_8F60BF9F_9FFD_8A65_41AD_161708EC769C","vfov":7.63,"hfov":9.84,"scaleMode":"fit_inside","data":{"label":"Casar\u00e3o Mont\u2019Alverne"},"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_91E1F949_9FC7_96ED_41E1_EEBD6FA8606A","class":"HotspotPanoramaOverlay"},{"data":{"label":"Belchior"},"maps":[],"areas":["this.HotspotPanoramaOverlayArea_91709263_9FFB_BADD_41C5_C5770B4E3331"],"items":[{"pitch":-77.47,"yaw":49.66,"data":{"label":"Belchior"},"distance":50,"image":"this.res_8F60AF9F_9FFD_8A65_41C6_AD1810BDE18E","vfov":4.47,"hfov":3.61,"scaleMode":"fit_inside","roll":26.83,"class":"HotspotPanoramaOverlayImage"}],"useHandCursor":true,"id":"overlay_9048D201_9FFB_BA5D_41D4_59989637D53F","class":"HotspotPanoramaOverlay"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":385,"url":"media/res_6E7CF015_7C90_4743_41B4_29609BFA1272_0.webp","height":300,"class":"ImageResourceLevel"}],"id":"res_6E7CF015_7C90_4743_41B4_29609BFA1272","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":283,"url":"media/res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F_0.webp","height":220,"class":"ImageResourceLevel"}],"id":"res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":306,"url":"media/res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD_0.webp","height":242,"class":"ImageResourceLevel"}],"id":"res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":363,"url":"media/res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3_0.webp","height":281,"class":"ImageResourceLevel"}],"id":"res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":355,"url":"media/res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A_0.webp","height":275,"class":"ImageResourceLevel"}],"id":"res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":363,"url":"media/res_6E00CD74_7C90_D9C1_41DB_F6546D67776E_0.webp","height":281,"class":"ImageResourceLevel"}],"id":"res_6E00CD74_7C90_D9C1_41DB_F6546D67776E","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":275,"url":"media/res_6EA68127_7C90_494F_41DA_0830A8E26D02_0.webp","height":214,"class":"ImageResourceLevel"}],"id":"res_6EA68127_7C90_494F_41DA_0830A8E26D02","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":337,"url":"media/res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209_0.webp","height":261,"class":"ImageResourceLevel"}],"id":"res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":365,"url":"media/res_6EEA0777_7C90_C9CE_41A2_B09D558607BF_0.webp","height":282,"class":"ImageResourceLevel"}],"id":"res_6EEA0777_7C90_C9CE_41A2_B09D558607BF","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":356,"url":"media/res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062_0.webp","height":276,"class":"ImageResourceLevel"}],"id":"res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_88056339_87C6_68D5_41DC_21A9C305EA53","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":203,"url":"media/res_9AD2A72D_8842_28CD_41D1_88906E9A19E5_0.webp","height":157,"class":"ImageResourceLevel"}],"id":"res_9AD2A72D_8842_28CD_41D1_88906E9A19E5","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_88089548_87BE_28B3_41D5_74B1CD733668","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":356,"url":"media/res_9A53E72F_8842_28CD_41D4_6B7185823140_0.webp","height":275,"class":"ImageResourceLevel"}],"id":"res_9A53E72F_8842_28CD_41D4_6B7185823140","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_986CE164_8846_2B73_41B0_411D738DB42D","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":384,"url":"media/res_9A503982_8846_1BB7_41E0_B358A504D714_0.webp","height":301,"class":"ImageResourceLevel"}],"id":"res_9A503982_8846_1BB7_41E0_B358A504D714","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_987C8DCB_8842_3BB6_41CC_3D77D59ABEFB","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":200,"url":"media/res_99B60D41_8842_18B5_41BF_8F8D186DC92B_0.webp","height":155,"class":"ImageResourceLevel"}],"id":"res_99B60D41_8842_18B5_41BF_8F8D186DC92B","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9237F9D2_9FC7_89FF_41E3_40ED98ED1FAC","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":316,"url":"media/res_8F60BF9F_9FFD_8A65_41AD_161708EC769C_0.webp","height":245,"class":"ImageResourceLevel"}],"id":"res_8F60BF9F_9FFD_8A65_41AD_161708EC769C","class":"ImageResource"},{"click":"this.openLink(this.translate('LinkBehaviour_90A32D3D_9FFC_8EA5_41D7_6C7E41024916.source'), '_blank')","mapColor":"any","id":"HotspotPanoramaOverlayArea_91709263_9FFB_BADD_41C5_C5770B4E3331","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"levels":[{"width":116,"url":"media/res_8F60AF9F_9FFD_8A65_41C6_AD1810BDE18E_0.webp","height":143,"class":"ImageResourceLevel"}],"id":"res_8F60AF9F_9FFD_8A65_41C6_AD1810BDE18E","class":"ImageResource"}],"scrollBarColor":"#000000","backgroundColorRatios":[0],"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Mar 16 2025