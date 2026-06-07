"use strict";(globalThis.webpackChunk_mlflow_mlflow=globalThis.webpackChunk_mlflow_mlflow||[]).push([[9258],{9258(e,n,a){a.d(n,{r:()=>ae});var t=a(15032),i=a(29942),s=a(10587),r=a(77753),o=a(8539),l=a(88021),d=a(5460),u=a(72503),c=a(51477),m=a(40372),p=a(56827),g=a(19740),h=a(39521),v=a(92529),f=a(63968);var y={name:"a41n9l",styles:"justify-content:flex-start !important"},T={name:"0",styles:""},x={name:"bcffy2",styles:"display:flex;align-items:center;justify-content:space-between"},b={name:"fhxb3m",styles:"display:flex;flex-direction:row;align-items:center"},I={name:"a41n9l",styles:"justify-content:flex-start !important"};const Y=({experimentId:e,currentRunUuid:n,setCompareToRunUuid:a,compareToRunUuid:i,setCurrentRunUuid:o})=>{const{theme:l}=(0,s.u)(),d=(0,p.tz)(),Y=(0,m.LE)(),{runInfos:C}=(0,v.Xz)(e),S=(0,c.useMemo)(()=>{if(C)return C.map(e=>{var n;return{key:e.runUuid,value:null!==(n=e.runName)&&void 0!==n?n:e.runUuid}}).filter(e=>e.key)},[C]),R=(0,c.useMemo)(()=>{if(C)return C.filter(e=>e.runUuid!==n).map(e=>{var n;return{key:e.runUuid,value:null!==(n=e.runName)&&void 0!==n?n:e.runUuid}}).filter(e=>Boolean(e.key))},[C,n]),w=null===C||void 0===C?void 0:C.find(e=>e.runUuid===n),N=null===C||void 0===C?void 0:C.find(e=>e.runUuid===i),_=(0,h.Zp)(),U=(0,h.zy)(),A=(0,c.useCallback)(n=>{const a=g.Ay.getRunPageRoute(e,n)+"/evaluations";_({pathname:a,search:U.search})},[e,U.search,_]),k=null!==o&&void 0!==o?o:A;return n?(0,f.FD)("div",{css:(0,t.AH)({display:"flex",gap:l.spacing.sm,alignItems:"center"},""),children:[(0,f.Y)("div",{css:(0,t.AH)({display:"flex",alignItems:"center",justifyContent:"flex-start",gap:l.spacing.sm},""),children:(0,f.FD)(r.DialogCombobox,{componentId:"codegen_no_dynamic_mlflow_web_js_src_experiment_tracking_components_evaluations_evaluationruncompareselector_112",id:"compare-to-run-combobox",value:n?[n]:void 0,children:[(0,f.Y)(r.DialogComboboxCustomButtonTriggerWrapper,{children:(0,f.Y)(s.B,{endIcon:(0,f.Y)(s.E,{}),componentId:"mlflow.evaluations_review.table_ui.compare_to_run_button",css:y,children:(0,f.FD)("div",{css:(0,t.AH)({display:"flex",gap:l.spacing.sm,alignItems:"center",fontSize:`${l.typography.fontSizeSm}px !important`},""),children:[(0,f.Y)(u.E,{color:Y(n)}),null!==w&&void 0!==w&&w.runName?(0,f.Y)(s.T.Hint,{children:null===w||void 0===w?void 0:w.runName}):d.formatMessage({id:"+T+iqa",defaultMessage:"Select baseline run"})]})})}),(0,f.Y)(r.DialogComboboxContent,{children:(0,f.Y)(r.DialogComboboxOptionList,{children:(S||[]).map((e,a)=>(0,f.Y)(s.aw,{value:e.value,onChange:n=>k(e.key),checked:e.key===n,children:(0,f.FD)("div",{css:(0,t.AH)({display:"flex",gap:l.spacing.sm,alignItems:"center"},""),children:[(0,f.Y)(u.E,{color:Y(e.key)}),e.value]})},a))})})]})}),(0,f.Y)("span",{css:T,children:d.formatMessage({id:"iYmFCZ",defaultMessage:"compare to"})}),a&&(0,f.Y)("div",{css:x,children:(0,f.FD)("div",{css:b,children:[(0,f.FD)(r.DialogCombobox,{componentId:"codegen_no_dynamic_mlflow_web_js_src_experiment_tracking_components_evaluations_evaluationruncompareselector_190",id:"compare-to-run-combobox",value:i?[i]:void 0,children:[(0,f.Y)(r.DialogComboboxCustomButtonTriggerWrapper,{children:(0,f.Y)(s.B,{endIcon:(0,f.Y)(s.E,{}),componentId:"mlflow.evaluations_review.table_ui.compare_to_run_button",css:I,children:(0,f.Y)("div",{css:(0,t.AH)({display:"flex",gap:l.spacing.sm,alignItems:"center",fontSize:`${l.typography.fontSizeSm}px !important`},""),children:null!==N&&void 0!==N&&N.runName?(0,f.FD)(f.FK,{children:[(0,f.Y)(u.E,{color:Y(i)}),(0,f.Y)(s.T.Hint,{children:null===N||void 0===N?void 0:N.runName})]}):(0,f.Y)("span",{css:(0,t.AH)({color:l.colors.textPlaceholder},""),children:d.formatMessage({id:"cfzQMh",defaultMessage:"baseline run"})})})})}),(0,f.Y)(r.DialogComboboxContent,{children:(0,f.Y)(r.DialogComboboxOptionList,{children:(R||[]).map((e,n)=>(0,f.Y)(s.aw,{value:e.value,onChange:n=>a(e.key),checked:e.key===i,children:(0,f.FD)("div",{css:(0,t.AH)({display:"flex",gap:l.spacing.sm,alignItems:"center"},""),children:[(0,f.Y)(u.E,{color:Y(e.key)}),e.value]})},n))})})]}),(null===N||void 0===N?void 0:N.runName)&&(0,f.Y)(s.ad,{"aria-hidden":"false",css:(0,t.AH)({color:l.colors.textPlaceholder,fontSize:l.typography.fontSizeSm,marginLeft:l.spacing.sm,":hover":{color:l.colors.actionTertiaryTextHover}},""),role:"button",onClick:()=>{a(void 0)},onPointerDownCapture:e=>{e.stopPropagation()}})]})})]}):(0,f.Y)(f.FK,{})};var C=a(89511),S=a(52930),R=a(19159),w=a(15213);const N=e=>(0,c.useMemo)(()=>e?(0,i.intersection)((0,w.T)(e),[v.o8.Evaluations,v.o8.Metrics,v.o8.Assessments]):[],[e]);var _=a(78424),U=a(41325),A=a(34665),k=a(4981),D=a(61432),E=a(11877),F=a(37889);const M="_assessments.json",H=()=>{const e=(0,A.wA)(),[n,a]=(0,c.useState)(!1);return{savePendingAssessments:(0,c.useCallback)(async(n,t,s)=>{try{a(!0);const r=await(async e=>{const n=(0,E.To)(M,e),a=await(0,E.Up)(n).then(e=>JSON.parse(e));if(!(0,i.isArray)(a.data)||!(0,i.isArray)(a.columns))throw new Error("Artifact is malformed and/or not valid JSON");return a})(n),o=((e,n)=>n.map(n=>{var a,t,i;return[e,n.name,{source_type:null===(a=n.source)||void 0===a?void 0:a.sourceType,source_id:null===(t=n.source)||void 0===t?void 0:t.sourceId,source_metadata:null===(i=n.source)||void 0===i?void 0:i.metadata},n.timestamp||null,n.booleanValue||null,n.numericValue||null,n.stringValue||null,n.rationale||null,n.metadata||null,null,null]}))(t,s),l=((e,n,a)=>{const t=(0,D.G4)(M,n),s=a.map(({name:e,source:n})=>({name:e,source:n?{source_type:n.sourceType,source_id:n.sourceId,source_metadata:n.metadata}:void 0})),r=t.entries.filter(({evaluation_id:n,name:a,source:t})=>e===n&&s.find(e=>(0,i.isEqual)({name:a,source:t},e))).map(e=>t.entries.indexOf(e));return n.data.filter((e,n)=>!r.includes(n))})(t,r,s);await e((0,k.Of)(n,M,{columns:r.columns,data:[...l,...o]})),e({type:(0,F.ec)(k.So),payload:(0,D.G4)(M,{columns:r.columns,data:[...l,...o]}),meta:{runUuid:n,artifactPath:M}})}catch(r){throw l.A.logErrorAndNotifyUser(r.message||r),r}finally{a(!1)}},[e]),isSaving:n}};var $=a(70270);const P=$.J1`
  query SearchRuns($data: MlflowSearchRunsInput!) {
    mlflowSearchRuns(input: $data) {
      apiError {
        helpUrl
        code
        message
      }
      runs {
        info {
          runName
          status
          runUuid
          experimentId
          artifactUri
          endTime
          lifecycleStage
          startTime
          userId
        }
        experiment {
          experimentId
          name
          tags {
            key
            value
          }
          artifactLocation
          lifecycleStage
          lastUpdateTime
        }
        data {
          metrics {
            key
            value
            step
            timestamp
          }
          params {
            key
            value
          }
          tags {
            key
            value
          }
        }
        inputs {
          datasetInputs {
            dataset {
              digest
              name
              profile
              schema
              source
              sourceType
            }
            tags {
              key
              value
            }
          }
          modelInputs {
            modelId
          }
        }
        outputs {
          modelOutputs {
            modelId
            step
          }
        }
        modelVersions {
          version
          name
          creationTimestamp
          status
          source
        }
      }
    }
  }
`,B=({filter:e,experimentIds:n,disabled:a=!1})=>{var t,s,r;const{data:o,loading:l,error:d,refetch:u}=(0,$.IT)(P,{variables:{data:{filter:e,experimentIds:n}},skip:a});return{loading:l,data:(0,i.first)(null!==(t=null===o||void 0===o||null===(s=o.mlflowSearchRuns)||void 0===s?void 0:s.runs)&&void 0!==t?t:[]),refetchRun:u,apolloError:d,apiError:null===o||void 0===o||null===(r=o.mlflowSearchRuns)||void 0===r?void 0:r.apiError}};var L={name:"r3950p",styles:"flex:1;display:flex;justify-content:center;align-items:center"};const O=({experimentId:e,runUuid:n,runTags:a,runDisplayName:i,data:l})=>{const{theme:u}=(0,s.u)(),c=N(a),m=0===(null===l||void 0===l?void 0:l.length),[p,g]=(0,o.Y)(),h=(0,_.N9)(),y=H(),{data:T,displayName:x,loading:b}=j(e,p,c);if(b)return(0,f.Y)(r.LegacySkeleton,{});const I=e=>e.filter(e=>e.type===v.$6.ASSESSMENT||e.type===v.$6.INPUT||e.type===v.$6.TRACE_INFO&&[v.tj,v.$W,v.Pn].includes(e.id));return m?(0,f.Y)("div",{css:L,children:(0,f.Y)(s.ds,{title:(0,f.Y)(d.A,{id:"NqqMPs",defaultMessage:"No evaluation tables logged"}),description:null})}):(0,f.FD)("div",{css:(0,t.AH)({marginTop:u.spacing.sm,width:"100%",overflowY:"hidden"},""),children:[!(0,C.iA)()&&(0,f.Y)("div",{css:(0,t.AH)({width:"100%",padding:`${u.spacing.xs}px 0`},""),children:(0,f.Y)(Y,{experimentId:e,currentRunUuid:n,compareToRunUuid:p,setCompareToRunUuid:g})}),(()=>{const a={experimentId:e,currentRunDisplayName:i,currentEvaluationResults:l||[],compareToEvaluationResults:T,runUuid:n,compareToRunUuid:p,compareToRunDisplayName:x,compareToRunLoading:b,saveAssessmentsQuery:y,getTrace:S.Rb,initialSelectedColumns:I};return(0,f.Y)(v.tU,{makeHtml:h,children:(0,f.Y)(v.ez,{...a})})})()]})},j=(e,n,a)=>{const{data:t,isLoading:s}=(0,v.Ie)({runUuid:n||"",artifacts:a},{disabled:(0,i.isNil)(n)}),{data:r,loading:o}=B({experimentIds:[e],filter:`attributes.run_id = "${n}"`,disabled:(0,i.isNil)(n)});return{data:t,displayName:l.A.getRunDisplayName(null===r||void 0===r?void 0:r.info,n),loading:s||o}};var z=a(20193),q=a(14700),G=a(81924),Q=a(56486),V=a(74343),K=a(25631),W=a(966),X=a(16654),Z=a(54767);const J=({children:e,makeHtmlFromMarkdown:n,experimentId:a})=>(0,f.Y)(v.tU,{makeHtml:n,children:e});var ee={name:"1nxh63r",styles:"overflow-y:hidden;height:100%;display:flex;flex-direction:column"};const ne=({experimentId:e,runUuid:n,runDisplayName:a,setCurrentRunUuid:r,showCompareSelector:l=!1,showRefreshButton:p=!1,hideCompareSelector:g=!1})=>{const{theme:h}=(0,s.u)(),y=((0,V.A)(),(0,_.N9)()),[T,x]=(0,o.Y)(),[b,I]=(0,c.useState)(!1),w=(0,c.useMemo)(()=>[(0,v.$U)(e)],[e]),N=S.Uv,A=!1,{assessmentInfos:k,allColumns:D,totalCount:E,evaluatedTraces:F,otherEvaluatedTraces:M,isLoading:H,error:$,tableFilterOptions:P}=(0,v.KW)({locations:w,runUuid:n,otherRunUuid:T,disabled:A,filterByAssessmentSourceRun:!0}),[B,L]=(0,c.useState)({});(0,R.Gt)("selectedTraceIds",B);const[O,j]=(0,c.useState)(""),[ne,ae]=(0,v.R7)(),se=(0,m.LE)(),re=(0,z.jE)(),oe=(0,c.useCallback)(e=>{const n=F.concat(M),{responseHasContent:a,inputHasContent:t,tokensHasContent:i}=(0,q.l)(n),s=n.some(e=>{var n,a;return Boolean(null===(n=e.traceInfo)||void 0===n||null===(a=n.trace_metadata)||void 0===a?void 0:a[G.n2])});return e.filter(e=>e.type===v.$6.ASSESSMENT||e.type===v.$6.EXPECTATION||t&&e.type===v.$6.INPUT||a&&e.type===v.$6.TRACE_INFO&&e.id===v.Rl||i&&e.type===v.$6.TRACE_INFO&&e.id===v.YO||e.type===v.$6.TRACE_INFO&&[v.XQ,v.tj,v.$W].includes(e.id)||s&&[v.yX,v.jN,v.mq].includes(e.id))},[F,M]),{selectedColumns:le,toggleColumns:de,setSelectedColumns:ue}=(0,v.K0)(e,D,oe,n),[ce,me]=(0,v.GY)(le),{data:pe,isLoading:ge,isFetching:he,error:ve,refetchMlflowTraces:fe,fetchNextPage:ye,hasNextPage:Te,isFetchingNextPage:xe}=(0,v.Zn)({locations:w,currentRunDisplayName:a,searchQuery:O,filters:ne,runUuid:n,tableSort:ce,disabled:A,filterByAssessmentSourceRun:!0,enablePagination:(0,i.isNil)(T)}),{data:be,displayName:Ie,loading:Ye}=ie({experimentId:e,traceLocations:w,compareToRunUuid:T,isQueryDisabled:A}),Ce=(0,c.useCallback)(()=>{I(e=>!e)},[]),Se=(0,c.useRef)(!1);(0,c.useEffect)(()=>{if(!Se.current&&pe&&pe.length>0){pe.some(e=>{var n;return Boolean(null===(n=e.trace_metadata)||void 0===n?void 0:n[G.n2])})&&I(!0),Se.current=!0}},[pe]);const Re=(0,c.useMemo)(()=>[e],[e]),we=(0,X.n)({experimentIds:Re,runUuid:n,traceInfos:pe,traceInfosCount:null===pe||void 0===pe?void 0:pe.length,traceInfosLoading:ge,metadataTotalCount:E,disabled:A}),Ne=(0,Z.m)({experimentIds:Re,runUuid:n,disabled:A}),_e=(0,Z.m)({experimentIds:Re,runUuid:T,disabled:(0,i.isNil)(T)}),{showEditTagsModalForTrace:Ue,EditTagsModal:Ae}=(0,U.$)({onSuccess:()=>(0,v.BL)({queryClient:re}),existingTagKeys:(0,v.d9)(pe||[])}),ke=(0,Q.F)({traceSearchLocations:w}),De=K.p,Ee=(0,c.useMemo)(()=>({deleteTracesAction:ke,exportToEvals:!0,editTags:{showEditTagsModalForTrace:Ue,EditTagsModal:Ae}}),[ke,Ue,Ae]),Fe=ge||Ye,Me=se(n),He=T?se(T):void 0,[$e,Pe]=(0,c.useState)(!1);return H?(0,f.Y)(te,{}):$?(0,f.Y)("div",{children:(0,f.Y)("pre",{children:String($)})}):(0,f.FD)("div",{css:(0,t.AH)({marginTop:h.spacing.sm,width:"100%",overflowY:"hidden"},""),children:[!(0,C.iA)()&&!l&&!g&&(0,f.Y)("div",{css:(0,t.AH)({width:"100%",padding:`${h.spacing.xs}px 0`},""),children:(0,f.Y)(Y,{experimentId:e,currentRunUuid:n,compareToRunUuid:T,setCompareToRunUuid:x,setCurrentRunUuid:r})}),l&&T&&(0,f.FD)("div",{css:(0,t.AH)({display:"flex",alignItems:"center",width:"100%",paddingBottom:h.spacing.sm,gap:h.spacing.sm},""),children:[(0,f.Y)(s.T.Text,{children:(0,f.Y)(d.A,{id:"v/njcq",defaultMessage:"Comparing"})}),(0,f.FD)("span",{css:(0,t.AH)({display:"inline-flex",alignItems:"center",gap:h.spacing.xs},""),children:[Me&&(0,f.Y)(u.E,{color:Me}),(0,f.Y)(s.T.Text,{bold:!0,children:a})]}),(0,f.Y)(s.T.Text,{children:(0,f.Y)(d.A,{id:"taI4Bv",defaultMessage:"to"})}),(0,f.FD)("span",{css:(0,t.AH)({display:"inline-flex",alignItems:"center",gap:h.spacing.xs},""),children:[He&&(0,f.Y)(u.E,{color:He}),(0,f.Y)(s.T.Text,{bold:!0,children:Ie})]})]}),(0,f.Y)(G.gm,{renderExportTracesToDatasetsModal:De,DrawerComponent:W.q,children:(0,f.Y)(v.Nf,{rowSelection:B,setRowSelection:L,children:(0,f.Y)(v.sG,{experimentId:e,getTrace:N,isGroupedBySession:b,DrawerComponent:W.q,children:(0,f.FD)("div",{css:ee,children:[(0,f.Y)(v.w_,{experimentId:e,searchQuery:O,pageSource:"run-view-traces",setSearchQuery:j,filters:ne,setFilters:ae,assessmentInfos:k,countInfo:we,traceActions:Ee,tableSort:ce,setTableSort:me,allColumns:D,selectedColumns:le,setSelectedColumns:ue,toggleColumns:de,traceInfos:pe,tableFilterOptions:P,onRefresh:p?fe:void 0,isRefreshing:p?he:void 0,isGroupedBySession:b,onToggleSessionGrouping:Ce}),Fe?(0,f.Y)(te,{}):ve?(0,f.Y)("div",{children:(0,f.Y)("pre",{children:String(ve)})}):(0,f.Y)(J,{makeHtmlFromMarkdown:y,experimentId:e,children:(0,f.Y)(v._p,{experimentId:e,currentRunDisplayName:a,compareToRunDisplayName:Ie,runUuid:n,compareToRunUuid:T,getTrace:N,getRunColor:se,assessmentInfos:k,setFilters:ae,filters:ne,selectedColumns:le,allColumns:D,tableSort:ce,currentTraceInfoV3:pe||[],compareToTraceInfoV3:be,onTraceTagsEdit:Ue,isTableLoading:Fe,isGroupedBySession:b,fetchNextPage:ye,hasNextPage:Te,isFetchingNextPage:xe,assessmentCountMetrics:Ne,compareAssessmentCountMetrics:_e})}),Ae]})})})})]})},ae=({experimentId:e,experiment:n,runUuid:a,runTags:t,runDisplayName:s,setCurrentRunUuid:r,showCompareSelector:o=!1,showRefreshButton:l=!1,hideCompareSelector:d=!1})=>{const u=N(t),c=Boolean(a),{data:m,isLoading:p}=(0,v.Ie)({runUuid:a||"",artifacts:u||void 0},{disabled:!c});return p?(0,f.Y)(te,{}):!(0,i.isNil)(m)&&m.length>0?(0,f.Y)(O,{experimentId:e,runUuid:a,runDisplayName:s,data:m,runTags:t}):(0,f.Y)(ne,{experimentId:e,runUuid:a,runDisplayName:s,setCurrentRunUuid:r,showCompareSelector:o,showRefreshButton:l,hideCompareSelector:d})},te=()=>{const{theme:e}=(0,s.u)();return(0,f.Y)("div",{css:(0,t.AH)({display:"block",marginTop:e.spacing.md,height:"100%",width:"100%"},""),children:[...Array(10).keys()].map(e=>(0,f.Y)(r.ParagraphSkeleton,{label:"Loading...",seed:`s-${e}`},e))})},ie=e=>{const{compareToRunUuid:n,experimentId:a,traceLocations:t,isQueryDisabled:s}=e,{data:r,isLoading:o}=(0,v.Zn)({locations:t,currentRunDisplayName:void 0,runUuid:n,disabled:(0,i.isNil)(n)||s,filterByAssessmentSourceRun:!0,enablePagination:!1}),{data:d,loading:u}=B({experimentIds:[a],filter:`attributes.run_id = "${n}"`,disabled:(0,i.isNil)(n)});return{data:r,displayName:l.A.getRunDisplayName(null===d||void 0===d?void 0:d.info,n),loading:o||u}}},8539(e,n,a){a.d(n,{V:()=>s,Y:()=>r});var t=a(51477),i=a(39521);const s="compareToRunUuid",r=()=>{var e;const[n,a]=(0,i.ok)();return[null!==(e=n.get(s))&&void 0!==e?e:void 0,(0,t.useCallback)(e=>{a(n=>void 0===e?(n.delete(s),n):(n.set(s,e),n))},[a])]}}}]);