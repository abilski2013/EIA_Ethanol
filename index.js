Promise.all([
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-Z00_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NAF_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NAL_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NAG_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NAO_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NAV_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NAC_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NAR_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NAA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NAS_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NAU_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBG_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NBF_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NBA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBB_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBO_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NBE_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NBH_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBN_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBL_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NBR_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBU_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBM_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NBD_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NCB_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCM_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCJ_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCI_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCH_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCO_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NCN_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCF_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NCS_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NUC_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NCY_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NCZ_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NDA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NDO_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NDR_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NEC_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NEG_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NES_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NEK_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NEN_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NFI_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NFR_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NFP_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NGG_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NGM_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NGH_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NGR_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NGJ_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NGP_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NGT_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NGV_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NGY_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NHA_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NHO_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NHK_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NHU_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NIN_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NID_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NIZ_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NEI_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NIS_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NIT_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NIV_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NJM_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NJA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NJO_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NKE_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NKS_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NKU_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NLG_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NLE_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NLI_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NLY_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NLH_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NLU_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NMA_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NMY_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NMT_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NRM_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NMP_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NMX_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NFM_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NMO_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NNP_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NNL_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NNA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NNZ_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NNU_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NNI_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NNO_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NMU_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NPK_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NPS_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NPM_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NPP_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NPA_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NPE_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NRP_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NPL_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NPO_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NPZ_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NQA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NRO_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NRS_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NSC_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NST_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NVC_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NWS_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NSA_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NSG_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NSL_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NSN_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NNN_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NSI_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NSF_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NSP_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NCE_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NNS_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NSW_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NSZ_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NTW_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NTZ_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NTH_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NTO_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NTD_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NTS_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NTU_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NTK_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NUR_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NTC_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NUK_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NUY_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NVE_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NVM_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.MFEEX_NUS-NVI_1.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NVQ_MBBL.M"),
d3.json("https://api.eia.gov/series/?api_key=d4ac61ba04c07e0632b7f4800ae9a869&series_id=PET.M_EPOOXE_EEX_NUS-NYE_MBBL.M")
    
]).then(function(data) {

    var combined = [];
    for (var i in data) {
        for (var j in data[i].series[0].data) {
            
            combined.push({"Name": data[i].series[0].description, "Date": data[i].series[0].data[j][0], "Value": data[i].series[0].data[j][1], "Units": data[i].series[0].units, "Updated": data[i].series[0].updated});
        };
        
    };

    var obj = {
       "Data": combined 
    };
    
    var tabledata = obj.Data;
    
    for (var i in tabledata) {
        var row = `<tr>
                        <td>${tabledata[i].Name}</td>
                        <td>${tabledata[i].Date}</td>
                        <td>${tabledata[i].Value}</td>
                        <td>${tabledata[i].Units}</td>
                        <td>${tabledata[i].Updated}</td>
                   </tr>`;
        var table = $('#table-body')
        table.append(row)
        
    };
    
});

