/** Created by hoshen.mahmud on 25-Nov-15.
 * ======================================================================================================================================================*/
$(document).ready(function () {$(".multiSelect").select2();$('.date').datepicker({format: DATE_FORMAT, autoclose: true});$('.date').prop('placeholder', DATE_FORMAT);$('#sendBackReason').prop('disabled', true);/*setTimeout(function() {$('.flashMessage').fadeOut();}, 5000);*/setTimeout(function () {$('.success').fadeOut();}, 5000);setTimeout(function () {$('.message').fadeOut();}, 15000);setTimeout(function () {$('.warning').fadeOut();}, 10000);setTimeout(function () {$('.error').fadeOut();}, 60000);$(".collapse-btn").click(function () {$(this).closest("legend").next(".collapse-block").slideToggle("slow", function () {$(this).find("i").toggleClass("fa fa-minus fa fa-plus");});});$("button.prepare").click(function () {$("#submitType").val("prepare");$("form#addForm").submit();});$("button.draft").click(function () {$("#submitType").val("draft");$("form#addForm").submit();});$("button.sendBack").click(function () {$('#sendBackReason').prop('disabled', false);var sendBackReason = $('#sendBackReason').val();if (sendBackReason) {$("#submitType").val("sendBack");$("#checkForm").submit();}});$("button.checkAndSubmit").click(function () {$('#sendBackReason').prop('disabled', true);$("#submitType").val("checkAndSubmit");$("#checkForm").submit();});$("#sendBackReason").focusout(function () {$('#sendBackReason').prop('disabled', true);});$("#zone").change(function () {var zoneId = $(this).val();var controller = "commonAjax";var action = "getEnterpriseByZoneId";$.ajax({url: contextPath + "/" + controller + "/" + action, /*dataType: "json",*/data: {zoneId: zoneId}, /*beforeSend: function () {$.unblockUI();},*/success: function (data, textStatus, jqXHR) {console.log(data);$("#enterprise").html(data);}, error: function (jqXHR, textStatus, errorThrown) {console.log(textStatus);}, /*complete: function () {$.unblockUI();}*/});});$(document).on('change', '.btn-file :file', function () {var input = $(this), label = input.val().replace(/\\/g, '/').replace(/.*\//, ''), output = $(this).parents('.input-group').find(':text');output.val(label);});$(document).on('change', '.fl', function () {var id = this.id;var value = this.value;var idSegments = id.split("_");var rowId = idSegments[1];if (value) {$("#requiredDocId_" + rowId).prop("checked", true);$("#fileName_" + rowId).val(value);}});});function dtlAdd(selectorClass) {var selectorIndex = $("." + selectorClass).length, cloneElement = "." + selectorClass + ":last";$(cloneElement).clone().insertAfter(cloneElement).show().find("*").each(function () {var name = this.name || "";this.name = name.replace(/\d+/, selectorIndex)});var removeBtn = '<div class="box-footer"><div class="pull-right"><a class="btn btn-block btn-danger btn-xs" onclick="dtlRemove(\'' + selectorClass + '\', this);"><i class="fa fa-minus"></i>Remove</a></div></div>';if ($(cloneElement + " > .box-footer").length == 0) {$(cloneElement + " > .box-body").after(removeBtn);}/*------------------------------------------------------------------------------------------------------------------------------------------------------*//*var removeBtn = '<div class="pull-right" style="padding-right: 10px"><a class="btn btn-block btn-danger btn-xs" onclick="dtlRemove(\'' + selectorClass + '\', this);"><i class="fa fa-minus">Remove</i></a></div>';if ($(cloneElement + " > .box-footer").length == 0) {alert('dkjasldfj');$(cloneElement).after(removeBtn);}*//*------------------------------------------------------------------------------------------------------------------------------------------------------*/$('.datePick').datepicker('update');$(cloneElement).find('input').val('');$(cloneElement).find('textArea').val('');$(cloneElement).find('select').val('');selectorIndex++;return true;}function dtlRemove(selectorClass, _this) {$(_this).closest("." + selectorClass).remove();return true;}
/*======================================================================================================================================================*/