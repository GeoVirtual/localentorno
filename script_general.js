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
var script = {"height":"100%","gap":10,"scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openLink":TDV.Tour.Script.openLink,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"enableVR":TDV.Tour.Script.enableVR,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getComponentByName":TDV.Tour.Script.getComponentByName,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleVR":TDV.Tour.Script.toggleVR,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"init":TDV.Tour.Script.init,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"existsKey":TDV.Tour.Script.existsKey,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"historyGoForward":TDV.Tour.Script.historyGoForward,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"disableVR":TDV.Tour.Script.disableVR,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showWindow":TDV.Tour.Script.showWindow,"executeJS":TDV.Tour.Script.executeJS,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getMediaByName":TDV.Tour.Script.getMediaByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getKey":TDV.Tour.Script.getKey,"initQuiz":TDV.Tour.Script.initQuiz,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizStart":TDV.Tour.Script.quizStart,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"downloadFile":TDV.Tour.Script.downloadFile,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"translate":TDV.Tour.Script.translate,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"createTween":TDV.Tour.Script.createTween,"setLocale":TDV.Tour.Script.setLocale,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"historyGoBack":TDV.Tour.Script.historyGoBack},"hash": "691ec66bb99951d7ee6741333cc20353a3c475be51e6d3944543b602a7abb109", "definitions": [{"aaEnabled":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"keepModel3DLoadedWithoutLocation":true,"class":"PanoramaPlayer"},{"id":"mainPlayList","items":[{"camera":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera","media":"this.panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"subtitlesTextShadowHorizontalLength":1,"width":"100%","toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"minHeight":50,"playbackBarHeight":10,"subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"minWidth":100,"toolTipFontSize":"1.11vmin","surfaceReticleSelectionColor":"#FFFFFF","subtitlesFontColor":"#FFFFFF","toolTipFontFamily":"Arial","playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"playbackBarHeadShadowOpacity":0.7,"progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"progressRight":"33%","vrThumbstickRotationStep":20,"progressOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColorDirection":"horizontal","subtitlesFontFamily":"Arial","subtitlesBottom":50,"progressBarBorderColor":"#000000","firstTransitionDuration":0,"progressBarBackgroundColorRatios":[0],"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarProgressBorderColor":"#000000","subtitlesTop":0,"vrPointerColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarHeadBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"progressBorderColor":"#000000","class":"ViewerArea","progressBarBackgroundColor":["#3399FF"],"id":"MainViewer","toolTipTextShadowColor":"#000000","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingLeft":6,"toolTipBorderColor":"#767676","playbackBarHeadHeight":15,"toolTipShadowColor":"#333138","playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColor":["#000000"],"progressHeight":2,"progressBorderSize":0,"subtitlesFontSize":"3vmin","progressBottom":10,"playbackBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadow":true,"progressBarBorderSize":0,"playbackBarHeadBorderSize":0,"progressBarBorderRadius":2,"subtitlesBackgroundColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowColor":"#000000","playbackBarLeft":0,"subtitlesTextShadowColor":"#000000","subtitlesGap":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"playbackBarBottom":5,"surfaceReticleColor":"#FFFFFF","progressBorderRadius":2,"subtitlesBackgroundOpacity":0.2,"vrPointerSelectionColor":"#FF6600","progressLeft":"33%","height":"100%","vrPointerSelectionTime":2000},{"initialPosition":{"pitch":-15.46,"class":"PanoramaCameraPosition","yaw":-1.04},"initialSequence":"this.sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8","enterPointingToHorizon":true,"class":"PanoramaCamera","id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_camera"},{"hfovMin":"120%","label":trans('panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62.label'),"id":"panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62","overlays":["this.overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1","this.overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D","this.overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942","this.overlay_6E10B483_7C90_4F47_41C1_9B9151775D87","this.overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE","this.overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37","this.overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08","this.overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E","this.overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE","this.overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90","this.overlay_960C5316_87C6_68DF_41D9_CCB4136392A1","this.overlay_9615D4B6_87BE_29DE_41DF_39F9BB129DB8","this.overlay_99A76141_8846_28B5_41D9_2023124B4985","this.overlay_999CDD9F_8842_3BCE_41AF_9F1314DF0C44"],"data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"class":"Panorama","frames":[{"cube":{"class":"ImageResource","levels":[{"tags":"ondemand","rowCount":6,"width":18432,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/0/{row}_{column}.webp","height":3072,"colCount":36,"class":"TiledImageResourceLevel"},{"tags":"ondemand","rowCount":3,"width":9216,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/1/{row}_{column}.webp","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"tags":"ondemand","rowCount":2,"width":6144,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/2/{row}_{column}.webp","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"rowCount":1,"width":3072,"url":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_0/{face}/3/{row}_{column}.webp","height":512,"colCount":6,"class":"TiledImageResourceLevel"}]},"thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","class":"CubicPanoramaFrame"}],"hfovMax":130,"hfov":360,"thumbnailUrl":"media/panorama_7019BAED_7B90_F8C2_41CE_4A71E4C9EC62_t.webp","vfov":180},{"class":"PanoramaCameraSequence","id":"sequence_70D9C454_7B90_CFC1_41D9_CD108860F3F8","movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"data":{"label":"Theatro São João"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2"],"items":[{"pitch":-34.51,"yaw":-2.33,"distance":50,"image":"this.res_6E7CF015_7C90_4743_41B4_29609BFA1272","scaleMode":"fit_inside","hfov":12,"vfov":9.32,"data":{"label":"Theatro S\u00e3o Jo\u00e3o"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6D19176E_7CB0_49C1_41C9_CA3F193B34F1","useHandCursor":true},{"data":{"label":"Secretaria de Juventude e Cultura"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3"],"items":[{"pitch":-25.76,"yaw":38.25,"data":{"label":"Secretaria de Juventude e Cultura"},"distance":50,"image":"this.res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F","scaleMode":"fit_inside","hfov":8.84,"vfov":6.86,"roll":1.99,"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6E1F4660_7C90_4BC2_41D2_D8E8E7B6E38D","useHandCursor":true},{"data":{"label":"Igreja Menino Deus"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104"],"items":[{"pitch":-9.35,"yaw":144.16,"distance":50,"image":"this.res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD","scaleMode":"fit_inside","hfov":9.7,"vfov":7.52,"data":{"label":"Igreja Menino Deus"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6CDB3E0F_7C90_5B5F_419F_6A441B647942","useHandCursor":true},{"data":{"label":"Museu Dom José"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D"],"items":[{"pitch":-15.7,"yaw":-158.51,"distance":50,"image":"this.res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3","scaleMode":"fit_inside","hfov":11.29,"vfov":8.75,"data":{"label":"Museu Dom Jos\u00e9"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6E10B483_7C90_4F47_41C1_9B9151775D87","useHandCursor":true},{"data":{"label":"Escola de Música"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2"],"items":[{"pitch":-37.01,"yaw":-124.32,"distance":50,"image":"this.res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A","scaleMode":"fit_inside","hfov":11.04,"vfov":8.56,"data":{"label":"Escola de M\u00fasica"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6D5AB0F9_7C91_C8C2_41C3_B3B63C4DB8EE","useHandCursor":true},{"data":{"label":"Casa da Cultura"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95"],"items":[{"pitch":-16.73,"yaw":-175.64,"distance":50,"image":"this.res_6E00CD74_7C90_D9C1_41DB_F6546D67776E","scaleMode":"fit_inside","hfov":11.29,"vfov":8.75,"data":{"label":"Casa da Cultura"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6CFA0F77_7C90_79CE_41D2_18AF0D260C37","useHandCursor":true},{"data":{"label":"Igreja da Sé"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37"],"items":[{"pitch":1.5,"yaw":143.7,"distance":50,"image":"this.res_6EA68127_7C90_494F_41DA_0830A8E26D02","scaleMode":"fit_inside","hfov":8.58,"vfov":6.65,"data":{"label":"Igreja da S\u00e9"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6D381C82_7C90_5F46_41D9_C2D95BCD0D08","useHandCursor":true},{"data":{"label":"Igreja das Dores"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939"],"items":[{"pitch":0.64,"yaw":128,"distance":50,"image":"this.res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209","scaleMode":"fit_inside","hfov":10.49,"vfov":8.13,"data":{"label":"Igreja das Dores"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6E2C8064_7C90_47C2_41A8_7A3C51C76A3E","useHandCursor":true},{"data":{"label":"Igreja São Francisco"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881"],"items":[{"pitch":1.84,"yaw":-105.86,"distance":50,"image":"this.res_6EEA0777_7C90_C9CE_41A2_B09D558607BF","scaleMode":"fit_inside","hfov":11.33,"vfov":8.79,"data":{"label":"Igreja S\u00e3o Francisco"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6DA1CBD1_7C91_D8C3_41CD_2458C9C35EEE","useHandCursor":true},{"data":{"label":"Serra da Meruoca"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6"],"items":[{"pitch":8.48,"yaw":-129.31,"distance":50,"image":"this.res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062","scaleMode":"fit_inside","hfov":11.06,"vfov":8.58,"data":{"label":"Serra da Meruoca"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_6DA87208_7C90_4B42_41B4_7F6DDE331B90","useHandCursor":true},{"data":{"label":"Boulevard do Arco"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_88056339_87C6_68D5_41DC_21A9C305EA53"],"items":[{"pitch":-10.17,"yaw":9.79,"distance":50,"image":"this.res_9AD2A72D_8842_28CD_41D1_88906E9A19E5","scaleMode":"fit_inside","hfov":6.32,"vfov":4.9,"data":{"label":"Boulevard do Arco"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_960C5316_87C6_68DF_41D9_CCB4136392A1","useHandCursor":true},{"data":{"label":"Estátua de Belchior"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_88089548_87BE_28B3_41D5_74B1CD733668"],"items":[{"pitch":-70.51,"yaw":34.78,"data":{"label":"Est\u00e1tua de Belchior"},"distance":50,"image":"this.res_9A53E72F_8842_28CD_41D4_6B7185823140","rotationX":5.79,"scaleMode":"fit_inside","hfov":11.05,"vfov":8.57,"roll":12.49,"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_9615D4B6_87BE_29DE_41DF_39F9BB129DB8","useHandCursor":true},{"data":{"label":"Fonte"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_986CE164_8846_2B73_41B0_411D738DB42D"],"items":[{"pitch":-71.12,"yaw":-44.02,"data":{"label":"Fonte"},"distance":50,"image":"this.res_9A503982_8846_1BB7_41E0_B358A504D714","scaleMode":"fit_inside","hfov":12.06,"vfov":9.35,"roll":18.17,"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_99A76141_8846_28B5_41D9_2023124B4985","useHandCursor":true},{"data":{"label":"Arco Nossa Senhora de Fátima"},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_987C8DCB_8842_3BB6_41CC_3D77D59ABEFB"],"items":[{"pitch":-2.72,"yaw":5.65,"distance":50,"image":"this.res_99B60D41_8842_18B5_41BF_8F8D186DC92B","scaleMode":"fit_inside","hfov":6.23,"vfov":4.83,"data":{"label":"Arco Nossa Senhora de F\u00e1tima"},"class":"HotspotPanoramaOverlayImage"}],"maps":[],"enabledInCardboard":true,"id":"overlay_999CDD9F_8842_3BCE_41AF_9F1314DF0C44","useHandCursor":true},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CB097EC_7CB0_48C2_41D5_EA7A28676DB2"},{"levels":[{"width":385,"url":"media/res_6E7CF015_7C90_4743_41B4_29609BFA1272_0.webp","height":300,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6E7CF015_7C90_4743_41B4_29609BFA1272"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CCB5695_7C90_4B43_41D2_CD7EC578A0F3"},{"levels":[{"width":283,"url":"media/res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F_0.webp","height":220,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DD53A43_7C91_DBC6_41DC_D0E671EF071F"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C9A3E8E_7C90_5B41_41B9_17793B715104"},{"levels":[{"width":306,"url":"media/res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD_0.webp","height":242,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DC9A9C1_7C91_F8C2_41D9_24FBD78702CD"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CC704A6_7C90_4F4E_41D2_7D69ACA92D6D"},{"levels":[{"width":363,"url":"media/res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3_0.webp","height":281,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EA08C48_7C97_DFC2_41C6_D8252A4A8AD3"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C804178_7C91_C9C1_41CD_F70F9A4826B2"},{"levels":[{"width":355,"url":"media/res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A_0.webp","height":275,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6DC1D0D1_7C90_C8C3_41C9_CB802FC4873A"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C82FFF6_7C90_78C1_41BB_B5D8ADF87D95"},{"levels":[{"width":363,"url":"media/res_6E00CD74_7C90_D9C1_41DB_F6546D67776E_0.webp","height":281,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6E00CD74_7C90_D9C1_41DB_F6546D67776E"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C81AD00_7C90_5941_41D6_31F7A82CEB37"},{"levels":[{"width":275,"url":"media/res_6EA68127_7C90_494F_41DA_0830A8E26D02_0.webp","height":214,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EA68127_7C90_494F_41DA_0830A8E26D02"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CDEC087_7C90_474E_41DD_A3E77DC30939"},{"levels":[{"width":337,"url":"media/res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209_0.webp","height":261,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA1776_7C90_C9CE_41DD_2325FBDCF209"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CF7FC55_7C91_DFC2_4199_51CE70C1E881"},{"levels":[{"width":365,"url":"media/res_6EEA0777_7C90_C9CE_41A2_B09D558607BF_0.webp","height":282,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA0777_7C90_C9CE_41A2_B09D558607BF"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6D3A129C_7C90_4B41_41BB_85884908AEA6"},{"levels":[{"width":356,"url":"media/res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062_0.webp","height":276,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6EEA5777_7C90_C9CE_41A9_6588AC6B4062"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_88056339_87C6_68D5_41DC_21A9C305EA53"},{"levels":[{"width":203,"url":"media/res_9AD2A72D_8842_28CD_41D1_88906E9A19E5_0.webp","height":157,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_9AD2A72D_8842_28CD_41D1_88906E9A19E5"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_88089548_87BE_28B3_41D5_74B1CD733668"},{"levels":[{"width":356,"url":"media/res_9A53E72F_8842_28CD_41D4_6B7185823140_0.webp","height":275,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_9A53E72F_8842_28CD_41D4_6B7185823140"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_986CE164_8846_2B73_41B0_411D738DB42D"},{"levels":[{"width":386,"url":"media/res_9A503982_8846_1BB7_41E0_B358A504D714_0.webp","height":301,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_9A503982_8846_1BB7_41E0_B358A504D714"},{"displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_987C8DCB_8842_3BB6_41CC_3D77D59ABEFB"},{"levels":[{"width":200,"url":"media/res_99B60D41_8842_18B5_41BF_8F8D186DC92B_0.webp","height":155,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_99B60D41_8842_18B5_41BF_8F8D186DC92B"}],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"class":"Player","minWidth":0,"data":{"displayTooltipInTouchScreens":true,"history":{},"textToSpeechConfig":{"pitch":1,"volume":1,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnTooltip":false},"locales":{"pt":"locale/pt.txt"},"name":"Player700","defaultLocale":"pt"},"id":"rootPlayer","start":"this.init()","backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","watermark":false,"backgroundColorRatios":[0],"propagateClick":false,"width":"100%","scrollBarMargin":2,"children":["this.MainViewer"],"layout":"absolute"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Tue Mar 11 2025