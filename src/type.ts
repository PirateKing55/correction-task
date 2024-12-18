export interface IEHRRow {
  criterion_id: string;
  criterion_description: string;
  subcriterion_logical_operator?: string;
  decision?: string;
  decision_rationale?: string;
  path_decision_rationale?: string;
  patient_data_mapping?: string;
  rationale?: string;
  assumptions_made?: string[];
  criteria_relevance?: "primary" | "secondary" | "none";
  potential_alternative_interpretations?: string[];
  confidence?: number;
  confidence_analysis?: {
    base_score: number;
    reducers_applied: { type: string; reduction: number; reason: string }[];
    final_score: number;
    requires_review: boolean;
  };
  original_reference_text?: string;
  subcriteria?: IEHRRow[];
}

export interface IEHRMapping {
  inclusion: IEHRRow[];
  exclusion: IEHRRow[];
}

export interface IncomingJson {
  criteria: IEHRMapping;
  final_decision: string;
  final_confidence: number;
  final_decision_rationale: string;
  validation_summary: {
    high_risk_elements: any[];
    review_recommended: boolean;
    review_reasons: any[];
  };
}
