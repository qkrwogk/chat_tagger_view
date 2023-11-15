# chat_tagger_view

본 Repository는 디지털포렌식연구에 투고된 다음 논문의 연구 과정에서 개발한 개체명 인식 SW입니다.

- [사건 관련 정보 선별을 위한 자연어 처리 기반 메신저 대화 내 개체명 인식 기법 연구](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11538142)
- 인용 : 박재하, 이상진, 박정흠. (2023). 사건 관련 정보 선별을 위한 자연어 처리 기반 메신저 대화 내 개체명 인식 기법 연구. 디지털포렌식연구, 17(3), 120-134.

사전 학습 및 미세 조정된 NER 모델은 다음 링크에서 확인하실 수 있습니다.

- [soddokayo/klue-roberta-large-klue-ner](https://huggingface.co/soddokayo/klue-roberta-large-klue-ner)

## 사용 방법

chat_tagger_eval로 분석한 파일을 업로드하여 화면에 표시할 수 있습니다.

![예시 화면 1](https://github.com/qkrwogk/chat_tagger_view/assets/138586629/88200135-ccda-462f-b2f5-0b9409f33c0e)

리액트 기반으로 추출된 NER 및 KW 태그를 가시화합니다.

![예시 화면 2](https://github.com/qkrwogk/chat_tagger_view/assets/138586629/1221b968-2ad5-47ad-9ffe-11e347b4b75b)

클릭하면 팝업으로 관련 정보가 표시됩니다.

![예시 화면 3](https://github.com/qkrwogk/chat_tagger_view/assets/138586629/0d9ac880-0792-4784-ab92-5b47380f5e34)
