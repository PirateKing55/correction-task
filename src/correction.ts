import { IEHRMapping, IEHRRow, IncomingJson } from "./type";
import { data } from "./allData";

const recursivelyAddSubcriteria = (
  currentCriterion: any,
  targetCriterion: any
): void => {
  if (!currentCriterion.subcriteria) {
    currentCriterion.subcriteria = [];
  }

  if (targetCriterion.subcriteria && targetCriterion.subcriteria.length > 0) {
    const existingSubcriteriaMap = new Map(
      currentCriterion.subcriteria.map((sc: any) => [sc.criterion_id, sc])
    );

    const orderedSubcriteria: any[] = [];

    for (let subcriterion of targetCriterion.subcriteria) {
      const existingSubcriterion = existingSubcriteriaMap.get(
        subcriterion.criterion_id
      );

      if (existingSubcriterion) {
        if (subcriterion.subcriteria && subcriterion.subcriteria.length > 0) {
          recursivelyAddSubcriteria(existingSubcriterion, subcriterion);
        }
        orderedSubcriteria.push(existingSubcriterion);
      } else {
        orderedSubcriteria.push(subcriterion);
      }
    }

    currentCriterion.subcriteria = orderedSubcriteria;
  }
};

const correction = (incompleteJson: IncomingJson): IncomingJson => {
  const completedJson: IncomingJson = JSON.parse(
    JSON.stringify(incompleteJson)
  );

  for (let criterion of completedJson.criteria.inclusion) {
    const targetCriterion = data.inclusion.find(
      (c) => c.criterion_id === criterion.criterion_id
    );

    if (!targetCriterion) {
      throw new Error(`Criterion ${criterion.criterion_id} not found`);
    }
    recursivelyAddSubcriteria(criterion, targetCriterion);
  }

  return completedJson;
};

// const correction = (incompleteJson: IncomingJson): IncomingJson => {
//   let completedJson: IncomingJson = JSON.parse(JSON.stringify(incompleteJson));

//   for (let criterion of completedJson.criteria.inclusion) {
//     const targetCriterion = data.inclusion.find(
//       (c) => c.criterion_id === criterion.criterion_id
//     );

//     if (!targetCriterion) {
//       throw new Error(`Criterion ${criterion.criterion_id} not found`);
//     }

//     if (targetCriterion.subcriteria && targetCriterion.subcriteria.length > 0) {
//       if (!criterion.subcriteria) {
//         criterion.subcriteria = [];
//       }

//       for (let subcriterion of targetCriterion.subcriteria) {
//         const existingSubcriterion = criterion.subcriteria.find(
//           (existing) => existing.criterion_id === subcriterion.criterion_id
//         );
//         if (!existingSubcriterion) {
//           criterion.subcriteria.push(subcriterion);
//         }
//       }
//     }
//   }

//   return completedJson;
// };

// -------xxxxxxxxxxxxx-------
// -------xxxxxxxxxxxxx-------

// TEST
const json: IncomingJson = {
  criteria: {
    inclusion: [
      {
        criterion_id: "3",
        criterion_description:
          "Cancer is suspected or known for ANY of the following:",
        subcriterion_logical_operator: "or",
        decision: "criteria_met",
        path_decision_rationale:
          "The patient has a known intracranial meningioma, which is a benign neoplasm of the cerebral meninges. This aligns with the inclusion criterion for known cancer.",
        criteria_relevance: "primary",
        confidence: 1.0,
        confidence_analysis: {
          base_score: 1.0,
          reducers_applied: [],
          final_score: 1.0,
          requires_review: false,
        },
        patient_data_mapping:
          "Patient has a documented history of intracranial meningioma (diagnosed in 2017) with follow-up imaging ordered.",
        rationale:
          "The patient meets the inclusion criterion for known cancer due to the documented diagnosis of intracranial meningioma.",
        assumptions_made: [],
        potential_alternative_interpretations: [],
        original_reference_text:
          "5. Intracranial meningioma - MRI 10/2017 in CA showed 1 cm R parafalcine meningioma. MRI head w and wo contrast ordered for ffu.",
        subcriteria: [
          {
            criterion_id: "3b",
            criterion_description: "Recurrence or metastasis is suspected.",
            subcriteria: [],
            decision: "criteria_met",
            confidence: 1.0,
            confidence_analysis: {
              base_score: 1.0,
              reducers_applied: [],
              final_score: 1.0,
              requires_review: false,
            },
            patient_data_mapping:
              "Follow-up imaging for intracranial meningioma suggests monitoring for potential recurrence.",
            rationale:
              "Follow-up imaging for the intracranial meningioma indicates monitoring for recurrence, meeting this subcriterion.",
            assumptions_made: [],
            potential_alternative_interpretations: [],
            original_reference_text:
              "MRI head w and wo contrast ordered for ffu.",
          },
        ],
      },
      {
        criterion_id: "10",
        criterion_description:
          "Mass, neoplasm, tumor, cyst or lesion is known and ANY of the following:",
        subcriterion_logical_operator: "or",
        decision: "criteria_met",
        path_decision_rationale:
          "The patient has a known intracranial meningioma, which is a benign neoplasm, and follow-up imaging has been ordered. This aligns with the inclusion criterion for known mass or neoplasm.",
        criteria_relevance: "secondary",
        confidence: 1.0,
        confidence_analysis: {
          base_score: 1.0,
          reducers_applied: [],
          final_score: 1.0,
          requires_review: false,
        },
        patient_data_mapping:
          "Patient has a documented history of intracranial meningioma (diagnosed in 2017) with follow-up imaging ordered.",
        rationale:
          "The patient meets the inclusion criterion for known mass or neoplasm due to the documented diagnosis of intracranial meningioma.",
        assumptions_made: [],
        potential_alternative_interpretations: [],
        original_reference_text:
          "5. Intracranial meningioma - MRI 10/2017 in CA showed 1 cm R parafalcine meningioma. MRI head w and wo contrast ordered for ffu.",
        subcriteria: [
          {
            criterion_id: "10d",
            criterion_description:
              "Low-grade tumor (WHO I to II) (eg, astrocytoma, glioma, meningioma, glioma) is known for ANY of the following:",
            subcriterion_logical_operator: "or",
            decision: "criteria_met",
            confidence: 1.0,
            confidence_analysis: {
              base_score: 1.0,
              reducers_applied: [],
              final_score: 1.0,
              requires_review: false,
            },
            patient_data_mapping:
              "Patient has a documented history of intracranial meningioma (WHO Grade I).",
            rationale:
              "The patient meets the subcriterion for known low-grade tumor due to the documented diagnosis of intracranial meningioma.",
            assumptions_made: [],
            potential_alternative_interpretations: [],
            original_reference_text:
              "5. Intracranial meningioma - MRI 10/2017 in CA showed 1 cm R parafalcine meningioma. MRI head w and wo contrast ordered for ffu.",
            subcriteria: [
              {
                criterion_id: "10d.i",
                criterion_description:
                  "Evaluation of new or changing neurological symptoms (eg, dizziness, headache, facial paralysis).",
                subcriteria: [],
                decision: "criteria_not_met",
                confidence: 0.9,
                confidence_analysis: {
                  base_score: 1.0,
                  reducers_applied: [
                    {
                      type: "missing_key_values",
                      reduction: 0.1,
                      reason:
                        "No new or changing neurological symptoms documented.",
                    },
                  ],
                  final_score: 0.9,
                  requires_review: false,
                },
                patient_data_mapping:
                  "No new or changing neurological symptoms were reported in the patient's history or physical exam.",
                rationale:
                  "The patient does not meet this subcriterion as there are no documented new or changing neurological symptoms.",
                assumptions_made: [],
                potential_alternative_interpretations: [],
                original_reference_text:
                  "No headache, blurry vision, tingling, numbness, weakness.",
              },
              {
                criterion_id: "10d.ii",
                criterion_description:
                  "Surveillance per National Comprehensive Cancer Network (NCCN) Guidelines.",
                subcriteria: [],
                decision: "criteria_met",
                confidence: 1.0,
                confidence_analysis: {
                  base_score: 1.0,
                  reducers_applied: [],
                  final_score: 1.0,
                  requires_review: false,
                },
                patient_data_mapping:
                  "Follow-up imaging for intracranial meningioma aligns with NCCN Guidelines for surveillance.",
                rationale:
                  "The patient meets this subcriterion as follow-up imaging for the intracranial meningioma is consistent with NCCN Guidelines for surveillance.",
                assumptions_made: [],
                potential_alternative_interpretations: [],
                original_reference_text:
                  "MRI head w and wo contrast ordered for ffu.",
              },
            ],
          },
        ],
      },
    ],
    exclusion: [],
  },
  final_decision: "approved",
  final_confidence: 1.0,
  final_decision_rationale:
    "The patient meets the inclusion criteria for known cancer (intracranial meningioma) and known mass or neoplasm (low-grade tumor). Follow-up imaging has been ordered in alignment with NCCN Guidelines for surveillance. There are no exclusion criteria applicable to this case.",
  validation_summary: {
    high_risk_elements: [],
    review_recommended: false,
    review_reasons: [],
  },
};

const correctedJson = correction(json);

console.log(correctedJson.criteria.inclusion[1].subcriteria);
