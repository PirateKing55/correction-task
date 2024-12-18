export const data = {
  inclusion: [
    {
      criterion_id: "1",
      criterion_description:
        "Aducanumab (Aduhelm) is prescribed (and authorized by the healthplan if appropriate) for Alzheimer's disease or cognitive impairment.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "2",
      criterion_description:
        "Arteriovenous malformation (AVM) or fistula (AVF) is suspected or known.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "3",
      criterion_description:
        "Cancer is suspected or known for ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "3a",
          criterion_description:
            "Cancer screening (including non-central nervous system (CNS) cancers and hereditary cancer syndromes). (See the National Comprehensive Cancer Network [NCCN] Guidelines for more information.)",
          subcriteria: [],
        },
        {
          criterion_id: "3b",
          criterion_description: "Recurrence or metastasis is suspected.",
          subcriteria: [],
        },
        {
          criterion_id: "3c",
          criterion_description: "Staging evaluation",
          subcriteria: [],
        },
        {
          criterion_id: "3d",
          criterion_description:
            "Surveillance following the NCCN Guidelines recommended schedule. (See the National Comprehensive Cancer Network [NCCN] Guidelines for more information.)",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "4",
      criterion_description:
        "Central sleep apnea is known from polysomnogram, age is over 1 year and central neurological cause (eg, chiari malformation, infectious/inflammatory disease, tumor) is suspected. (*NOTE: Must be in the absence of chronic opioid use, heart failure, high altitude or treatment emergent central sleep apnea).",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "5",
      criterion_description:
        "Cerebral spinal fluid (CSF) abnormality (eg, Arnold chiari, cranial arteriovenous malformation [AVM], hematoma, hydrocephalus, infection, leak, shunt malfunction, spontaneous intracranial hypotension [SIH], syrinx or syringomyelia) is suspected or known.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "6",
      criterion_description:
        "Congenital anomaly (eg, craniosynostosis, macrocephaly, microcephaly) is suspected or known.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "7",
      criterion_description:
        "Cranial nerve and/or visual abnormalities are suspected or known and ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "7a",
          criterion_description:
            "Bell’s palsy (peripheral facial nerve palsy) evaluation and ALL of the following:",
          subcriterion_logical_operator: "and",
          subcriteria: [
            {
              criterion_id: "7a.i",
              criterion_description:
                "Atypical signs/symptoms (eg, dysphagia, fever, headache, stiff neck) OR recurrent",
              subcriteria: [],
            },
            {
              criterion_id: "7a.ii",
              criterion_description: "Facial twitching/spasms prior to onset",
              subcriteria: [],
            },
            {
              criterion_id: "7a.iii",
              criterion_description: "Persistent for 2 to 4 months",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "7b",
          criterion_description:
            "Binocular diplopia and intracranial pathology is suspected AND ophthalmologic exam is abnormal.",
          subcriteria: [],
        },
        {
          criterion_id: "7c",
          criterion_description:
            "Bulbar symptoms (eg, difficulty chewing, dysarthria, dysphagia, dysphonia, facial muscle weakness) are present.",
          subcriteria: [],
        },
        {
          criterion_id: "7d",
          criterion_description:
            "Cranial nerve palsy (cranial nerve IX through XII) evaluation",
          subcriteria: [],
        },
        {
          criterion_id: "7e",
          criterion_description: "Cranial neuropathy, multiple",
          subcriteria: [],
        },
        {
          criterion_id: "7f",
          criterion_description: "Hemifacial spasm evaluation",
          subcriteria: [],
        },
        {
          criterion_id: "7g",
          criterion_description:
            "Horner's syndrome is symptomatic (eg, anhidrosis, miosis, ptosis), localizing the lesion to the central nervous system (CNS).",
          subcriteria: [],
        },
        {
          criterion_id: "7h",
          criterion_description:
            "Occipital neuralgia evaluation to exclude a structural lesion",
          subcriteria: [],
        },
        {
          criterion_id: "7i",
          criterion_description: "Optic neuritis evaluation",
          subcriteria: [],
        },
        {
          criterion_id: "7j",
          criterion_description:
            "Ophthalmologic, physical or neurological exam is abnormal (eg, optic atrophy, ocular nerve palsies, papilledema, pathologic nystagmus, visual field deficit).",
          subcriteria: [],
        },
        {
          criterion_id: "7k",
          criterion_description:
            "Pseudobulbar symptoms (eg, dysarthria, dysphagia, facial weakness, sudden, stereo-typed emotional outbursts that are not reflective of mood) are present.",
          subcriteria: [],
        },
        {
          criterion_id: "7l",
          criterion_description:
            "Sensorineural hearing loss on audiogram is asymmetric.",
          subcriteria: [],
        },
        {
          criterion_id: "7m",
          criterion_description:
            "Strabismus, in a pediatric individual, AND developmental delay or fundoscopic exam is abnormal.",
          subcriteria: [],
        },
        {
          criterion_id: "7n",
          criterion_description: "Trigeminal neuralgia evaluation",
          subcriteria: [],
        },
        {
          criterion_id: "7o",
          criterion_description:
            "Vocal cord lesions or vocal cord paralysis evaluation",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "8",
      criterion_description:
        "Global development delay (GDD) is known or developmental delay AND neurological exam is abnormal.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "9",
      criterion_description:
        "Infectious or inflammatory disease (eg, abscess, meningitis, neurosarcoidosis, complications of rhinosinusitis, vasculitis) is suspected or known.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "10",
      criterion_description:
        "Mass, neoplasm, tumor, cyst or lesion is known and ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "10a",
          criterion_description:
            "Arachnoid cyst evaluation follow-up, and EITHER of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "10a.i",
              criterion_description:
                "Age is less than 4 years old, serial imaging is warranted.",
              subcriteria: [],
            },
            {
              criterion_id: "10a.ii",
              criterion_description:
                "Age is older than 4 years old and newly symptomatic (eg, headaches, hydrocephalus, increased intracranial pressure, local mass effect, visual/endocrine dysfunction) are new or progressing.",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "10b",
          criterion_description:
            "Dermoid cysts/sinuses are midline AND intracranial extension is suspected.",
          subcriteria: [],
        },
        {
          criterion_id: "10c",
          criterion_description:
            "Histiocytic neoplasms (eg, Erdheim-Chester disease, Langerhans cell histiocytosis, Rosai-Dorfman disease) are known, to monitor treatment response or for surveillance.",
          subcriteria: [],
        },
        {
          criterion_id: "10d",
          criterion_description:
            "Low-grade tumor (WHO I to II) (eg, astrocytoma, glioma, meningioma, glioma) is known for ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "10d.i",
              criterion_description:
                "Evaluation of new or changing neurological symptoms (eg, dizziness, headache, facial paralysis).",
              subcriteria: [],
            },
            {
              criterion_id: "10d.ii",
              criterion_description:
                "Surveillance per National Comprehensive Cancer Network (NCCN) Guidelines.",
              subcriteria: [],
            },
            {
              criterion_id: "10d.iii",
              criterion_description: "Treatment response assessment",
              subcriteria: [],
            },
            {
              criterion_id: "10d.iv",
              criterion_description: "Treatment response assessment",
              subcriteria: [],
            },
            {
              criterion_id: "10d.v",
              criterion_description: "Treatment response assessment",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "10e",
          criterion_description:
            "Neurocutaneous syndromes tumor is known, to monitor for ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "10e.i",
              criterion_description:
                "Neurofibromatosis 1 and ANY of the following:",
              subcriterion_logical_operator: "or",
              subcriteria: [
                {
                  criterion_id: "10e.i.A",
                  criterion_description:
                    "Intracranial tumors are known, for follow-up.",
                  subcriteria: [],
                },
                {
                  criterion_id: "10e.i.B",
                  criterion_description:
                    "Tumors are suspected based on clinical evaluation.",
                  subcriteria: [],
                },
              ],
            },
            {
              criterion_id: "10e.ii",
              criterion_description:
                "Neurofibromatosis 2 for screening when asymptomatic; follow-up annually beginning at age 10 years",
              subcriteria: [],
            },
            {
              criterion_id: "10e.iii",
              criterion_description:
                "Sturge Weber syndrome to rule out intracranial involvement",
              subcriteria: [],
            },
            {
              criterion_id: "10e.iv",
              criterion_description:
                "Tuberous sclerosis; follow-up every 1 to 3 years until age 25",
              subcriteria: [],
            },
            {
              criterion_id: "10e.v",
              criterion_description:
                "Von Hippel Landau syndrome; follow-up every 2 years",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "10f",
          criterion_description:
            "Pineal cyst is known, size 5 mm or more, AND presents with atypical features (eg, ataxia, gaze paralysis, headache, nausea/vomiting, papilledema).",
          subcriteria: [],
        },
        {
          criterion_id: "10g",
          criterion_description:
            "Pituitary adenoma is known, for follow-up for ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "10g.i",
              criterion_description:
                "Functioning adenoma to assess treatment response OR 1 year follow-up after drug holiday",
              subcriteria: [],
            },
            {
              criterion_id: "10g.ii",
              criterion_description:
                "Macroadenoma is asymptomatic (10 mm or more); follow-up every 6 to 18 months or post-surgical follow-up every 1 to 2 years.",
              subcriteria: [],
            },
            {
              criterion_id: "10g.iii",
              criterion_description:
                "Microadenoma is asymptomatic AND non-functioning (less than 10 mm); repeat in one year, every 2 to 3 years, if stable.",
              subcriteria: [],
            },
            {
              criterion_id: "10g.iv",
              criterion_description:
                "Neuroendocrine signs (nausea, pain, vomiting) are new.",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "10h",
          criterion_description:
            "Rathke cleft cyst is known, for follow-up for ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "10h.i",
              criterion_description:
                "Asymptomatic, follow-up at 1 year, 3 years and 5 years",
              subcriteria: [],
            },
            {
              criterion_id: "10h.ii",
              criterion_description: "Neurological symptoms are new.",
              subcriteria: [],
            },
            {
              criterion_id: "10h.iii",
              criterion_description:
                "Post-treatment follow-up, yearly for 5 years",
              subcriteria: [],
            },
            {
              criterion_id: "10h.iv",
              criterion_description:
                "Prior imaging is abnormal, non-diagnostic or indeterminate.",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "10i",
          criterion_description:
            "Soft tissue mass of the head is known AND prior imaging (ultrasound, X-ray) is non-diagnostic or indeterminate.",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "11",
      criterion_description:
        "Mass, neoplasm, tumor, cyst or lesion is suspected and ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "11a",
          criterion_description:
            "Brain tumor is suspected and neurological symptoms are acute, new or progressing.",
          subcriteria: [],
        },
        {
          criterion_id: "11b",
          criterion_description:
            "CNS lesion is suspected with vertigo and neurological signs (eg, ataxia, change in sensation, double vision, weakness, vision loss).",
          subcriteria: [],
        },
        {
          criterion_id: "11c",
          criterion_description:
            "Pituitary tumors are suspected and ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "11c.i",
              criterion_description: "Central diabetes insipidus (low ADH)",
              subcriteria: [],
            },
            {
              criterion_id: "11c.ii",
              criterion_description:
                "Genetic disorder (eg, MEN1), that predisposes individual to increases risk of pituitary tumor, is known.",
              subcriteria: [],
            },
            {
              criterion_id: "11c.iii",
              criterion_description:
                "Neurologic findings (eg, compression of the optic chiasm, diplopia, gaze palsy)",
              subcriteria: [],
            },
            {
              criterion_id: "11c.iv",
              criterion_description:
                "Pituitary apoplexy with sudden onset of neurological and hormonal symptoms",
              subcriteria: [],
            },
            {
              criterion_id: "11c.v",
              criterion_description:
                "Pituitary gland hypofunctioning or hyperfunctioning is suspected based on hormone testing (eg, acromegaly, central hyperthyroidism, Cushing disease, elevated prolactin) OR hormonal testing (eg, growth hormone deficiency, hypogonadotrophic hypogonadism, hypopituitarism).",
              subcriteria: [],
            },
            {
              criterion_id: "11c.vi",
              criterion_description:
                "Precocious puberty in a child (male age is less than 9, female age is less than 8) and central cause is suspected based on hormonal studies.",
              subcriteria: [],
            },
          ],
        },
      ],
    },
    {
      criterion_id: "12",
      criterion_description:
        "Multiple Sclerosis (MS) is suspected or known and ANY of the following: (*NOTE: In the pediatric population, use a similar scan frequency for disease and therapeutic monitoring.",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "12a",
          criterion_description:
            "Dissemination in time (DIT) is demonstrated for diagnosis (every 6 to 12 months).",
          subcriteria: [],
        },
        {
          criterion_id: "12b",
          criterion_description:
            "MRI disease activity is NOT associated with new symptoms on routine follow-up scan; repeat scan in 6 months.",
          subcriteria: [],
        },
        {
          criterion_id: "12c",
          criterion_description:
            "Neurologic signs (eg, fatigue, numbness, tingling) are suspicious for MS and EITHER of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "12c.i",
              criterion_description:
                "Clinically isolated syndrome (eg, brain stem syndrome, optic neuritis, transverse myelitis)",
              subcriteria: [],
            },
            {
              criterion_id: "12c.ii",
              criterion_description:
                "Neurological signs are recurrent, variable and NOT attributed to another etiology.",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "12d",
          criterion_description:
            "New baseline establishment and NO recent imaging (within 12 months), postpartum OR 3 to 6 months after switching disease modifying therapy",
          subcriteria: [],
        },
        {
          criterion_id: "12e",
          criterion_description:
            "Progressive multifocal leukoencephalopathy (PML) surveillance when on natalizumab (Tsyabri) and ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "12e.i",
              criterion_description:
                "Anti-John Cunningham (anti-JC) virus antibody negative; follow-up annually",
              subcriteria: [],
            },
            {
              criterion_id: "12e.ii",
              criterion_description:
                "High-risk individuals who switch from natalizumab to other therapeutics; follow-up severy 3 to 4 months for up to 12 months.",
              subcriteria: [],
            },
            {
              criterion_id: "12e.iii",
              criterion_description:
                "PML occurrence (eg, anti-JC virus antibody index values [greater than 0.9], previously treated with immunosuppressive therapies, seropositive for JC virus and have been treated with natalizumab for at least 18 months) is high risk; follow-up every 3 to 4 months.",
              subcriteria: [],
            },
            {
              criterion_id: "12e.iv",
              criterion_description:
                "Treatment is started: follow-up in 12 months.",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "12f",
          criterion_description: "Signs are new AND exacerbation is suspected.",
          subcriteria: [],
        },
        {
          criterion_id: "12g",
          criterion_description:
            "Subclinical disease activity assessment every 1 to 2 years while on disease modifying therapy (DMRT), less frequently when stable for 2 to 3 years.",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "13",
      criterion_description:
        "Neurodegenerative conditions for ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "13a",
          criterion_description:
            "Movement disorder (eg, facial palsy or spasm, focal/lateral movement disorder, Huntington's disease, Parkinson's disease) is suspected or known.",
          subcriteria: [],
        },
        {
          criterion_id: "13b",
          criterion_description:
            "Neurocognitive disorders (eg, Alzheimer's disease, cognitive impairment, dementia, diffuse Lewy body) evaluation with mental status score of EITHER the mini-mental state examination (MMSE) or Montreal cognitive assessment (MoCA) of less than 26 or other similar mental status instruments/formal neuropsychological testing showing at least mild cognitive impairment AND a completed basic metabolic work-up (such as thyroid function testing, liver function testing, complete blood count, electrolytes and B12).",
          subcriteria: [],
        },
        {
          criterion_id: "13c",
          criterion_description:
            "Neurodegeneration with brain iron accumulation is suspected.",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "14",
      criterion_description:
        "Peri-procedural care to guide pre-procedure or invasive procedure planning or post-procedural follow-up",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "15",
      criterion_description:
        "Prior MRI brain imaging is non-diagnostic or indeterminate.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
    {
      criterion_id: "16",
      criterion_description:
        "Seizure disorder and epilepsy is suspected or known and seizures are ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "16a",
          criterion_description: "Activity or pattern is changed.",
          subcriteria: [],
        },
        {
          criterion_id: "16b",
          criterion_description: "Known and NO prior imaging",
          subcriteria: [],
        },
        {
          criterion_id: "16c",
          criterion_description: "Medically refractory",
          subcriteria: [],
        },
        {
          criterion_id: "16d",
          criterion_description: "Unprovoked and new onset",
          subcriteria: [],
        },
        {
          criterion_id: "16e",
          criterion_description:
            "Symptomatic with syncope AND neurological deficits (eg, altered mental status, dizziness, tremors)",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "17",
      criterion_description:
        "Stroke, transient ischemic attack (TIA) OR vascular disease is suspected or known and ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "17a",
          criterion_description:
            "Cavernous malformations or other low flow vascular malformations are suspected.",
          subcriteria: [],
        },
        {
          criterion_id: "17b",
          criterion_description: "Central venous thrombosis is suspected.",
          subcriteria: [],
        },
        {
          criterion_id: "17c",
          criterion_description:
            "Coagulopathy is known OR active anticoagulant use.",
          subcriteria: [],
        },
        {
          criterion_id: "17d",
          criterion_description:
            "Familial first-degree (child, parent, sibling) or personal history of brain aneurysm(s).",
          subcriteria: [],
        },
        {
          criterion_id: "17e",
          criterion_description:
            "Hemorrhage, hematoma or vascular abnormalities are known, for follow-up.",
          subcriteria: [],
        },
        {
          criterion_id: "17f",
          criterion_description:
            "Sensory or motor deficits are acute, new or fluctuating (limb weakness, speech difficulties, visual loss, lack of coordination, or mental status changes).",
          subcriteria: [],
        },
        {
          criterion_id: "17g",
          criterion_description:
            "Sickle cell disease and EITHER of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "17g.i",
              criterion_description:
                "Silent cerebral infarcts are suspected, age is 2 years old or more, with known Hemoglobin SS (HbSS) sickle cell disease or Hemoglobin S Beta (HbSß) thalassemia.",
              subcriteria: [],
            },
            {
              criterion_id: "17g.ii",
              criterion_description:
                "Neurological signs (eg, headache, paresthesias, sensory changes) are present.",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "17h",
          criterion_description:
            "Subarachnoid hemorrhage is suspected and prior imaging (CT or CTA) is non-diagnostic or indeterminate.",
          subcriteria: [],
        },
        {
          criterion_id: "17i",
          criterion_description:
            "Vertigo, AND cerebrovascular disease risk factors (eg, coronary artery disease, diabetes, hypertension) are known and stroke is suspected.",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "18",
      criterion_description: "Symptom evaluation for ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "18a",
          criterion_description:
            "Cyclical vomiting syndrome or abdominal migraine with neurological symptoms (eg, altered mental status, dizziness, tremors)",
          subcriteria: [],
        },
        {
          criterion_id: "18b",
          criterion_description: "Headache for ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "18b.i",
              criterion_description:
                "Chronic headaches with change in pattern or intensity (eg, last longer, more frequent or severe).",
              subcriteria: [],
            },
            {
              criterion_id: "18b.ii",
              criterion_description:
                "Migraine aura is atypical and complex (eg, aura lasts more than 60 minutes, NO aura, visual or sensory illusions).",
              subcriteria: [],
            },
            {
              criterion_id: "18b.iii",
              criterion_description:
                "New, acute and/or sudden-onset headache with ANY of the following:",
              subcriterion_logical_operator: "or",
              subcriteria: [
                {
                  criterion_id: "18b.iii.A",
                  criterion_description: "Age is 50 years or older.",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.B",
                  criterion_description: "Cancer history",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.C",
                  criterion_description:
                    "Coagulopathy is known OR active anticoagulant use.",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.D",
                  criterion_description:
                    "Familial first-degree (child, parent, sibling), or personal history of arteriovenous fistula (AVF) or brain aneurysm.",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.E",
                  criterion_description: "Fever",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.F",
                  criterion_description: "Immunocompromised status",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.G",
                  criterion_description: "Intracranial bleeding/stroke history",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.H",
                  criterion_description: "Pregnancy or puerperium",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.I",
                  criterion_description:
                    "Sentinel headache (eg, thunderclap, 'worst headache of my life') occurs with rapid intensity AND lasts less than 48 hours and prior imaging (CT,CTA, MRA) are non-diagnostic or indeterminate.",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iii.J",
                  criterion_description:
                    "Valsalva maneuver related (eg, coughing, exercising, sexual intercourse)",
                  subcriteria: [],
                },
              ],
            },
            {
              criterion_id: "18b.iv",
              criterion_description:
                "Persistent headache, in a pediatric individual, and ANY of the following:",
              subcriterion_logical_operator: "or",
              subcriteria: [
                {
                  criterion_id: "18b.iv.A",
                  criterion_description: "Age is less than 6 years old.",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iv.B",
                  criterion_description:
                    "Increased intracranial pressure is suspected and symptomatic (eg, recurring headache after waking, with or WITHOUT nausea/vomiting).",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iv.C",
                  criterion_description: "Occipital location",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iv.D",
                  criterion_description: "Prevents or disrupts sleep",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iv.E",
                  criterion_description:
                    "Severe and intracranial pathology is suspected (eg, cancer history, coagulopathy, congenital heart disease, hypertension, immune deficiency, neurofibromatosis, sickle cell disease",
                  subcriteria: [],
                },
                {
                  criterion_id: "18b.iv.F",
                  criterion_description: "NO family history of headache.",
                  subcriteria: [],
                },
              ],
            },
            {
              criterion_id: "18b.v",
              criterion_description:
                "Symptoms persist or worsen AND adherence to physician-directed treatment.",
              subcriteria: [],
            },
            {
              criterion_id: "18b.vi",
              criterion_description:
                "Trigeminal autonomic cephalgia (TAC) (eg, cluster, paroxysmal hemicrania/hemicrania continua and short-lasting unilateral neuralgiform headache) evaluation.",
              subcriteria: [],
            },
          ],
        },
        {
          criterion_id: "18c",
          criterion_description: "Mastication muscle weakness is unilateral.",
          subcriteria: [],
        },
        {
          criterion_id: "18d",
          criterion_description:
            "Mental status change (eg, amnesia, confusion, inability to follow simple commands, loss of words)",
          subcriteria: [],
        },
        {
          criterion_id: "18e",
          criterion_description:
            "Neurological exam with focal abnormality NOT evaluated by advanced imaging, or has progressed since prior advanced imaging.",
          subcriteria: [],
        },
        {
          criterion_id: "18f",
          criterion_description:
            "Neurological deficits (eg, altered mental status, dizziness, tremors) are new or worsening.",
          subcriteria: [],
        },
        {
          criterion_id: "18g",
          criterion_description:
            "Psychological changes (eg, abnormal behaviors, emotions or thoughts) are new or progressing.",
          subcriteria: [],
        },
        {
          criterion_id: "18h",
          criterion_description:
            "Syncope AND neurological deficits (eg, altered mental status, dizziness, tremors) OR seizure is suspected.",
          subcriteria: [],
        },
      ],
    },
    {
      criterion_id: "19",
      criterion_description:
        "Trauma is suspected or known and ANY of the following:",
      subcriterion_logical_operator: "or",
      subcriteria: [
        {
          criterion_id: "19a",
          criterion_description:
            "Brain injury is subacute or chronic AND there are new cognitive/neurologic deficit(s).",
          subcriteria: [],
        },
        {
          criterion_id: "19b",
          criterion_description:
            "Coagulopathy is known OR active anticoagulant use.",
          subcriteria: [],
        },
        {
          criterion_id: "19c",
          criterion_description:
            "Post concussive syndrome evaluation, when NO prior imaging was done, AND symptoms are persistent and/or disabling.",
          subcriteria: [],
        },
        {
          criterion_id: "19d",
          criterion_description:
            "Symptoms are acute, new or fluctuating, CT is non-diagnostic or indeterminate and ANY of the following:",
          subcriterion_logical_operator: "or",
          subcriteria: [
            {
              criterion_id: "19d.i",
              criterion_description: "Amnesia",
              subcriteria: [],
            },
            {
              criterion_id: "19d.ii",
              criterion_description: "Focal neurologic findings",
              subcriteria: [],
            },
            {
              criterion_id: "19d.iii",
              criterion_description: "Headache",
              subcriteria: [],
            },
            {
              criterion_id: "19d.iv",
              criterion_description:
                "Increased intracranial pressure signs (eg, headache, vertigo, vomiting)",
              subcriteria: [],
            },
            {
              criterion_id: "19d.v",
              criterion_description: "Mental status change",
              subcriteria: [],
            },
            {
              criterion_id: "19d.vi",
              criterion_description: "Motor changes",
              subcriteria: [],
            },
            {
              criterion_id: "19d.vii",
              criterion_description: "Seizures",
              subcriteria: [],
            },
            {
              criterion_id: "19d.viii",
              criterion_description: "Vomiting",
              subcriteria: [],
            },
          ],
        },
      ],
    },
    {
      criterion_id: "20",
      criterion_description:
        "Vertigo AND hearing loss is unilateral and progressive.",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
  ],
  exclusion: [
    {
      criterion_id: "",
      criterion_description: "",
      subcriterion_logical_operator: "",
      subcriteria: [],
    },
  ],
};
