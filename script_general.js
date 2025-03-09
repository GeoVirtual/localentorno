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
var script = {"scripts":{"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"translate":TDV.Tour.Script.translate,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"createTween":TDV.Tour.Script.createTween,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openLink":TDV.Tour.Script.openLink,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clone":TDV.Tour.Script.clone,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initQuiz":TDV.Tour.Script.initQuiz,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPixels":TDV.Tour.Script.getPixels,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeJS":TDV.Tour.Script.executeJS,"isPanorama":TDV.Tour.Script.isPanorama,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleVR":TDV.Tour.Script.toggleVR,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"init":TDV.Tour.Script.init,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setValue":TDV.Tour.Script.setValue,"showWindow":TDV.Tour.Script.showWindow,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"downloadFile":TDV.Tour.Script.downloadFile,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getKey":TDV.Tour.Script.getKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizFinish":TDV.Tour.Script.quizFinish,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"disableVR":TDV.Tour.Script.disableVR,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"enableVR":TDV.Tour.Script.enableVR,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"mixObject":TDV.Tour.Script.mixObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio},"propagateClick":false,"watermark":false,"children":["this.MainViewer"],"hash": "d2616caa91cbdd6fec6ad10655ce4e851b997f04ad046209bff2c986cde95e3f", "definitions": [{"initialSequence":"this.sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":-15.46,"class":"PanoramaCameraPosition","yaw":-1.04},"id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera"},{"items":[{"camera":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera","media":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadow":true,"minHeight":50,"minWidth":100,"toolTipPaddingBottom":4,"playbackBarBackgroundOpacity":1,"toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"},"class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","playbackBarBottom":5,"toolTipFontSize":"1.11vmin","subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipShadowColor":"#333138","progressRight":"33%","propagateClick":false,"progressOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorDirection":"horizontal","firstTransitionDuration":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"id":"MainViewer","vrPointerColor":"#FFFFFF","toolTipTextShadowColor":"#000000","progressBorderColor":"#000000","toolTipPaddingLeft":6,"playbackBarHeadShadowOpacity":0.7,"vrThumbstickRotationStep":20,"subtitlesFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"subtitlesTop":0,"toolTipFontColor":"#606060","progressBottom":10,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressHeight":2,"toolTipBackgroundColor":"#F6F6F6","progressBarBorderRadius":2,"progressBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressBarBorderSize":0,"height":"100%","subtitlesFontSize":"3vmin","playbackBarHeadBorderRadius":0,"width":"100%","surfaceReticleColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","progressBorderRadius":2,"subtitlesGap":0,"playbackBarBorderSize":0,"playbackBarLeft":0,"subtitlesBottom":50,"progressLeft":"33%","playbackBarHeadShadowBlurRadius":3,"toolTipFontFamily":"Arial"},{"data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"label":trans('panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"width":18432,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/0/{row}_{column}.webp","height":3072,"rowCount":6,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":36},{"width":9216,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/1/{row}_{column}.webp","height":1536,"rowCount":3,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"width":6144,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/2/{row}_{column}.webp","height":1024,"rowCount":2,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/3/{row}_{column}.webp","height":512,"rowCount":1,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp"}],"id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","hfovMax":130,"class":"Panorama","vfov":180,"overlays":["this.overlay_6D4CD9E1_7CB3_D8C3_41BA_9C3308045B54","this.overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1","this.overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D","this.overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942","this.overlay_6E10B483_7C90_4F47_41C1_9B9151775D87","this.overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE","this.overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37","this.overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08","this.overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E","this.overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE","this.overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90","this.overlay_6DAB5507_7C91_C94E_41D7_1DE5BEBF52BD"],"hfovMin":"120%","hfov":360},{"viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8"},{"data":{"label":"Arco do Triunfo"},"items":[{"pitch":-2.74,"yaw":5.65,"distance":50,"image":"this.res_6E2EFED3_7CB0_78C7_41CC_D292D2815452","class":"HotspotPanoramaOverlayImage","vfov":4.9,"scaleMode":"fit_inside","hfov":6.32,"data":{"label":"Arco do Triunfo"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CCE5A70_7CB3_DBC1_41C4_49AB4970B6BE"],"maps":[],"useHandCursor":true,"id":"overlay_6D4CD9E1_7CB3_D8C3_41BA_9C3308045B54"},{"data":{"label":"Theatro São João"},"items":[{"pitch":-34.51,"yaw":-2.33,"distance":50,"image":"this.res_6E7CF015_7C90_4743_41B4_29609BFA1272","class":"HotspotPanoramaOverlayImage","vfov":9.32,"scaleMode":"fit_inside","hfov":12,"data":{"label":"Theatro S\u00e3o Jo\u00e3o"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2"],"maps":[],"useHandCursor":true,"id":"overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1"},{"data":{"label":"Secretaria de Juventude e Cultura"},"items":[{"pitch":-25.76,"yaw":38.25,"data":{"label":"Secretaria de Juventude e Cultura"},"distance":50,"image":"this.res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F","class":"HotspotPanoramaOverlayImage","vfov":6.86,"scaleMode":"fit_inside","hfov":8.84,"roll":1.99}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3"],"maps":[],"useHandCursor":true,"id":"overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D"},{"data":{"label":"Igreja Menino Deus"},"items":[{"pitch":-9.35,"yaw":144.16,"distance":50,"image":"this.res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD","class":"HotspotPanoramaOverlayImage","vfov":7.52,"scaleMode":"fit_inside","hfov":9.7,"data":{"label":"Igreja Menino Deus"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104"],"maps":[],"useHandCursor":true,"id":"overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942"},{"data":{"label":"Museu Dom José"},"items":[{"pitch":-16.97,"yaw":-175.68,"distance":50,"image":"this.res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3","class":"HotspotPanoramaOverlayImage","vfov":9.4,"scaleMode":"fit_inside","hfov":12.12,"data":{"label":"Museu Dom Jos\u00e9"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D"],"maps":[],"useHandCursor":true,"id":"overlay_6E10B483_7C90_4F47_41C1_9B9151775D87"},{"data":{"label":"Escola de Música"},"items":[{"pitch":-37.01,"yaw":-124.32,"distance":50,"image":"this.res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A","class":"HotspotPanoramaOverlayImage","vfov":8.56,"scaleMode":"fit_inside","hfov":11.04,"data":{"label":"Escola de M\u00fasica"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2"],"maps":[],"useHandCursor":true,"id":"overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE"},{"data":{"label":"Casa da Cultura"},"items":[{"pitch":-15.68,"yaw":-158.51,"distance":50,"image":"this.res_6E00CD74_7C90_D9C1_41DB_F6546D67776E","class":"HotspotPanoramaOverlayImage","vfov":8.75,"scaleMode":"fit_inside","hfov":11.29,"data":{"label":"Casa da Cultura"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95"],"maps":[],"useHandCursor":true,"id":"overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37"},{"data":{"label":"Igreja da Sé"},"items":[{"pitch":1.5,"yaw":143.7,"distance":50,"image":"this.res_6EA68127_7C90_494F_41DA_0830A8E26D02","class":"HotspotPanoramaOverlayImage","vfov":6.65,"scaleMode":"fit_inside","hfov":8.58,"data":{"label":"Igreja da S\u00e9"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37"],"maps":[],"useHandCursor":true,"id":"overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08"},{"data":{"label":"Igreja das Dores"},"items":[{"pitch":0.64,"yaw":128,"distance":50,"image":"this.res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209","class":"HotspotPanoramaOverlayImage","vfov":8.13,"scaleMode":"fit_inside","hfov":10.49,"data":{"label":"Igreja das Dores"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939"],"maps":[],"useHandCursor":true,"id":"overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E"},{"data":{"label":"Igreja São Francisco"},"items":[{"pitch":1.84,"yaw":-105.86,"distance":50,"image":"this.res_6EEA0777_7C90_C9CE_41A2_B09D558607BF","class":"HotspotPanoramaOverlayImage","vfov":8.79,"scaleMode":"fit_inside","hfov":11.33,"data":{"label":"Igreja S\u00e3o Francisco"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881"],"maps":[],"useHandCursor":true,"id":"overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE"},{"data":{"label":"Serra da Meruoca"},"items":[{"pitch":8.48,"yaw":-129.31,"distance":50,"image":"this.res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062","class":"HotspotPanoramaOverlayImage","vfov":8.58,"scaleMode":"fit_inside","hfov":11.06,"data":{"label":"Serra da Meruoca"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6"],"maps":[],"useHandCursor":true,"id":"overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90"},{"data":{"label":"Estátua da Ema"},"items":[{"pitch":-71.1,"yaw":-43.95,"data":{"label":"Est\u00e1tua da Ema"},"distance":50,"image":"this.res_6EEA4777_7C90_C9CE_41DD_D3FCCBF2BD4F","class":"HotspotPanoramaOverlayImage","vfov":9.34,"scaleMode":"fit_inside","hfov":12.05,"roll":16.35}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CF44587_7C91_C94F_41C8_3D05C21419F3"],"maps":[],"useHandCursor":true,"id":"overlay_6DAB5507_7C91_C94E_41D7_1DE5BEBF52BD"},{"levels":[{"width":203,"url":"media/res_6E2EFED3_7CB0_78C7_41CC_D292D2815452_0.webp","height":157,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6E2EFED3_7CB0_78C7_41CC_D292D2815452"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CCE5A70_7CB3_DBC1_41C4_49AB4970B6BE","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":385,"url":"media/res_6E7CF015_7C90_4743_41B4_29609BFA1272_0.webp","height":300,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6E7CF015_7C90_4743_41B4_29609BFA1272"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":283,"url":"media/res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F_0.webp","height":220,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":307,"url":"media/res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD_0.webp","height":242,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":390,"url":"media/res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3_0.webp","height":302,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":355,"url":"media/res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A_0.webp","height":275,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":363,"url":"media/res_6E00CD74_7C90_D9C1_41DB_F6546D67776E_0.webp","height":281,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6E00CD74_7C90_D9C1_41DB_F6546D67776E"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":275,"url":"media/res_6EA68127_7C90_494F_41DA_0830A8E26D02_0.webp","height":214,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EA68127_7C90_494F_41DA_0830A8E26D02"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":337,"url":"media/res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209_0.webp","height":261,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":365,"url":"media/res_6EEA0777_7C90_C9CE_41A2_B09D558607BF_0.webp","height":282,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA0777_7C90_C9CE_41A2_B09D558607BF"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":356,"url":"media/res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062_0.webp","height":276,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"width":387,"url":"media/res_6EEA4777_7C90_C9CE_41DD_D3FCCBF2BD4F_0.webp","height":300,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA4777_7C90_C9CE_41DD_D3FCCBF2BD4F"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CF44587_7C91_C94F_41C8_3D05C21419F3","mapColor":"any","displayTooltipInTouchScreens":true}],"minHeight":0,"minWidth":0,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"class":"Player","scrollBarColor":"#000000","data":{"textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false},"history":{},"displayTooltipInTouchScreens":true,"defaultLocale":"pt","name":"Player700","locales":{"pt":"locale/pt.txt"}},"layout":"absolute","gap":10,"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"width":"100%","height":"100%","start":"this.init()","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Mar 9 2025