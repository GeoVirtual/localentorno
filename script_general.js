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
var script = {"scripts":{"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"translate":TDV.Tour.Script.translate,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setLocale":TDV.Tour.Script.setLocale,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"createTween":TDV.Tour.Script.createTween,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openLink":TDV.Tour.Script.openLink,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"clone":TDV.Tour.Script.clone,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initQuiz":TDV.Tour.Script.initQuiz,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getPixels":TDV.Tour.Script.getPixels,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeJS":TDV.Tour.Script.executeJS,"isPanorama":TDV.Tour.Script.isPanorama,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleVR":TDV.Tour.Script.toggleVR,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"existsKey":TDV.Tour.Script.existsKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"init":TDV.Tour.Script.init,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setValue":TDV.Tour.Script.setValue,"showWindow":TDV.Tour.Script.showWindow,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"downloadFile":TDV.Tour.Script.downloadFile,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizStart":TDV.Tour.Script.quizStart,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getOverlays":TDV.Tour.Script.getOverlays,"getKey":TDV.Tour.Script.getKey,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizFinish":TDV.Tour.Script.quizFinish,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"disableVR":TDV.Tour.Script.disableVR,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"enableVR":TDV.Tour.Script.enableVR,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"mixObject":TDV.Tour.Script.mixObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio},"propagateClick":false,"watermark":false,"children":["this.MainViewer"],"hash": "ce678f67f49cef8353f220955d9e575a601df4e0e54082088fe33059c4687912", "definitions": [{"items":[{"camera":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera","media":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList","id":"mainPlayList"},{"viewerArea":"this.MainViewer","arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","displayPlaybackBar":true,"aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"initialSequence":"this.sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"pitch":-15.46,"class":"PanoramaCameraPosition","yaw":-1.04},"id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera"},{"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadow":true,"minHeight":50,"minWidth":100,"toolTipPaddingBottom":4,"playbackBarBackgroundOpacity":1,"toolTipPaddingTop":4,"playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"},"class":"ViewerArea","subtitlesBorderColor":"#FFFFFF","playbackBarBottom":5,"toolTipFontSize":"1.11vmin","subtitlesFontColor":"#FFFFFF","vrPointerSelectionColor":"#FF6600","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"progressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipShadowColor":"#333138","progressRight":"33%","propagateClick":false,"progressOpacity":0.7,"subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderRadius":0,"progressBarBackgroundColorDirection":"horizontal","firstTransitionDuration":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"id":"MainViewer","vrPointerColor":"#FFFFFF","toolTipTextShadowColor":"#000000","progressBorderColor":"#000000","toolTipPaddingLeft":6,"playbackBarHeadShadowOpacity":0.7,"vrThumbstickRotationStep":20,"subtitlesFontFamily":"Arial","progressBarBackgroundColor":["#3399FF"],"toolTipBorderColor":"#767676","playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"subtitlesTop":0,"toolTipFontColor":"#606060","progressBottom":10,"playbackBarBorderColor":"#FFFFFF","progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressHeight":2,"toolTipBackgroundColor":"#F6F6F6","progressBarBorderRadius":2,"progressBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressBarBorderSize":0,"height":"100%","subtitlesFontSize":"3vmin","playbackBarHeadBorderRadius":0,"width":"100%","surfaceReticleColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","progressBorderRadius":2,"subtitlesGap":0,"playbackBarBorderSize":0,"playbackBarLeft":0,"subtitlesBottom":50,"progressLeft":"33%","playbackBarHeadShadowBlurRadius":3,"toolTipFontFamily":"Arial"},{"data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"label":trans('panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62.label'),"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"width":18432,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/0/{row}_{column}.webp","height":3072,"rowCount":6,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":36},{"width":9216,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/1/{row}_{column}.webp","height":1536,"rowCount":3,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":18},{"width":6144,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/2/{row}_{column}.webp","height":1024,"rowCount":2,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/3/{row}_{column}.webp","height":512,"rowCount":1,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp"}],"id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","hfovMax":130,"class":"Panorama","vfov":180,"overlays":["this.overlay_6B59843C_7B90_4F42_41C2_BE56E57FB7EF"],"hfovMin":"120%","hfov":360},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8"},{"data":{"label":"Theatro São João"},"items":[{"pitch":-33.06,"yaw":-2.41,"distance":50,"image":"this.res_6998E9C4_7B90_F8C1_41DD_B0B7F2394056","class":"HotspotPanoramaOverlayImage","vfov":12.11,"scaleMode":"fit_inside","hfov":10.5,"data":{"label":"Theatro S\u00e3o Jo\u00e3o"}}],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6B4CA455_7B90_4FC2_418B_B10D776D7525"],"maps":[],"useHandCursor":true,"id":"overlay_6B59843C_7B90_4F42_41C2_BE56E57FB7EF"},{"levels":[{"width":337,"url":"media/res_6998E9C4_7B90_F8C1_41DD_B0B7F2394056_0.webp","height":390,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6998E9C4_7B90_F8C1_41DD_B0B7F2394056"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6B4CA455_7B90_4FC2_418B_B10D776D7525","mapColor":"any","displayTooltipInTouchScreens":true}],"minHeight":0,"minWidth":0,"id":"rootPlayer","backgroundColor":["#FFFFFF"],"class":"Player","scrollBarColor":"#000000","data":{"textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false},"locales":{"pt":"locale/pt.txt"},"displayTooltipInTouchScreens":true,"defaultLocale":"pt","name":"Player700","history":{}},"layout":"absolute","gap":10,"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"width":"100%","height":"100%","start":"this.init()","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Mar 9 2025